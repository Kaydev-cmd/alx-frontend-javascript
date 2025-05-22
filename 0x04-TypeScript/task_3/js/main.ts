/// <reference path="./crud.d.ts"/>

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

export function insertRow(row: RowElement): RowID {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId: RowID): void {
  console.log("Delete row id", rowId);
  return;
}

export function updateRow(rowId: RowID, row: RowElement): RowID {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

const obj = {
  firstName: "Guillaume",
  lastName: "Salva",
};

CRUD.insertRow(obj);
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(500);
