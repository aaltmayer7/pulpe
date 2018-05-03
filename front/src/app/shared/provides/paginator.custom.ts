import { MatPaginatorIntl } from '@angular/material';
import { Injectable } from '@angular/core';

const frenchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) {
    return `0 sur ${length}`;
  }
  const lengthMax = Math.max(length, 0);
  const startIndex = page * pageSize;
  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex =
    startIndex < lengthMax
      ? Math.min(startIndex + pageSize, lengthMax)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} sur ${lengthMax}`;
};

@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Par page :';
  nextPageLabel = 'Page suivante';
  previousPageLabel = 'Page précédente';
  getRangeLabel = frenchRangeLabel;
}
