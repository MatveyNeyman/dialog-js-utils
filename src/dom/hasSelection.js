/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow
 */

/**
 * Checks if document has selection
 */
export function hasSelection(): boolean {
  if (typeof document !== 'undefined') {
    const selection = document.getSelection();

    return Boolean(selection && selection.toString());
  }

  return false;
}
