import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons(props) {

  const { numSelected } = props;

  return (
    <Stack spacing={2}>
      <Pagination count={numSelected} showFirstButton showLastButton />
    </Stack>
  );
}