// File: task_3/js/crud.d.ts

import { RowID, RowElement } from './interface';

// Declare the types for the existing JS module
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
