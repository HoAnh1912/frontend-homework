import React from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Box, Typography } from '@mui/material';
import { convertToRem } from 'utils/convert-to-rem';
import { themeColor } from 'assets/themes/theme';

const SortableHeader: React.FC<{ isActive: boolean; sortDESC: boolean | null; children: string | JSX.Element }> = ({
  sortDESC,
  children,
  isActive
}) => {
  return (
    <Box
      className="sortable-header"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
    >
      <Typography className="font-extrabold text-mainColor text-[14px]">{children}</Typography>
      <Box className={'rotate-90'}>
        <KeyboardBackspaceRoundedIcon
          sx={{ width: convertToRem('16px'), color: isActive ? (sortDESC ? themeColor.main_primary : 'gray') : 'gray' }}
        />
      </Box>
      <Box className={'-rotate-90'}>
        <KeyboardBackspaceRoundedIcon
          sx={{ width: convertToRem('16px'), color: isActive ? (sortDESC ? 'gray' : themeColor.main_primary) : 'gray' }}
        />
      </Box>
    </Box>
  );
};

export default SortableHeader;
