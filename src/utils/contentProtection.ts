/**
 * Global client-side content protection utility.
 * Applies globally to initial and dynamically rendered DOM content while
 * preserving full interactivity for form fields, buttons, and navigation.
 */

function isEditableTarget(target: EventTarget | null): boolean {
  if (!target || !(target instanceof Element)) return false;
  const tagName = target.tagName;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') {
    return true;
  }
  if ((target as HTMLElement).isContentEditable) {
    return true;
  }
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));
}

function markImagesNonDraggable(root: ParentNode): void {
  const images = root.querySelectorAll('img');
  images.forEach((img) => {
    img.draggable = false;
    if (img.getAttribute('draggable') !== 'false') {
      img.setAttribute('draggable', 'false');
    }
  });
}

let isInitialized = false;

export function initContentProtection(): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  if (isInitialized) {
    return () => {};
  }
  isInitialized = true;

  // 1. Disable right-click context menu globally
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  // 2. Prevent copy & cut globally
  const handleCopyOrCut = (e: ClipboardEvent) => {
    e.preventDefault();
    if (e.clipboardData) {
      try {
        e.clipboardData.setData('text/plain', '');
      } catch {
        // Ignore browser restrictions on clipboardData writes
      }
    }
  };

  // 3. Prevent selectstart on page content (keep editable inputs functional)
  const handleSelectStart = (e: Event) => {
    if (isEditableTarget(e.target)) return;
    e.preventDefault();
  };

  // 4. Disable image & element dragging globally
  const handleDragStart = (e: DragEvent) => {
    if (isEditableTarget(e.target)) return;
    e.preventDefault();
  };

  // 5. Disable common keyboard shortcuts for copy, cut, print, save, view source, and devtools
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = (e.key || '').toLowerCase();
    const hasPrimaryModifier = e.ctrlKey || e.metaKey;

    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl/Cmd + P (Print), Ctrl/Cmd + S (Save), Ctrl/Cmd + U (View Source)
    if (hasPrimaryModifier && (key === 'p' || key === 's' || key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl/Cmd + C (Copy), Ctrl/Cmd + X (Cut)
    if (hasPrimaryModifier && (key === 'c' || key === 'x')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl/Cmd + A (Select All) outside editable inputs
    if (hasPrimaryModifier && key === 'a' && !isEditableTarget(e.target)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl/Cmd + Shift + I / J / C / K / S (Inspect / Console / Save / Screenshot tools)
    if (
      hasPrimaryModifier &&
      e.shiftKey &&
      (key === 'i' || key === 'j' || key === 'c' || key === 'k' || key === 's')
    ) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // macOS Cmd + Option + I / J / C / U
    if (e.metaKey && e.altKey && (key === 'i' || key === 'j' || key === 'c' || key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // 6. Hide website content when browser print dialog is triggered
  const handleBeforePrint = () => {
    document.documentElement.classList.add('content-protection-printing');
  };

  const handleAfterPrint = () => {
    document.documentElement.classList.remove('content-protection-printing');
  };

  document.addEventListener('contextmenu', handleContextMenu, { capture: true });
  document.addEventListener('copy', handleCopyOrCut, { capture: true });
  document.addEventListener('cut', handleCopyOrCut, { capture: true });
  document.addEventListener('selectstart', handleSelectStart, { capture: true });
  document.addEventListener('dragstart', handleDragStart, { capture: true });
  document.addEventListener('keydown', handleKeyDown, { capture: true });
  window.addEventListener('beforeprint', handleBeforePrint);
  window.addEventListener('afterprint', handleAfterPrint);

  // Mark existing images non-draggable and observe dynamically loaded content
  markImagesNonDraggable(document);

  let observer: MutationObserver | null = null;
  if (typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLImageElement) {
              node.draggable = false;
              node.setAttribute('draggable', 'false');
            } else if (node instanceof Element) {
              markImagesNonDraggable(node);
            }
          });
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  return () => {
    isInitialized = false;
    document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
    document.removeEventListener('copy', handleCopyOrCut, { capture: true });
    document.removeEventListener('cut', handleCopyOrCut, { capture: true });
    document.removeEventListener('selectstart', handleSelectStart, { capture: true });
    document.removeEventListener('dragstart', handleDragStart, { capture: true });
    document.removeEventListener('keydown', handleKeyDown, { capture: true });
    window.removeEventListener('beforeprint', handleBeforePrint);
    window.removeEventListener('afterprint', handleAfterPrint);
    document.documentElement.classList.remove('content-protection-printing');
    if (observer) {
      observer.disconnect();
    }
  };
}
