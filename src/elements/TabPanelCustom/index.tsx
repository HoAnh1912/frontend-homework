import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './style.scss';
import { ITableTabs } from './table.type';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const TabPanelCustom = ({ listTab, content , handClick}: ITableTabs) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="tab-wrapper">
      <Box sx={{ background: 'white', padding: '20px', margin: '20px 20px 0 20px  ', borderRadius: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tabs sx={{ gap: '20px' }} value={value} onChange={handleChange} aria-label="basic tabs example">
            {listTab?.map((item: any, i: any) => <Tab key={i} label={item?.label} {...a11yProps(i)} />)}
          </Tabs>
          <Button
          onClick={handClick}
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, rgba(37,60,163,1) 0%, rgba(3,3,75,1) 100%)',
              display: 'flex',
              gap: '10px',
              textTransform: 'none',
              whiteSpace: 'nowrap',
              padding: '10px'
            }}
          >
            <AddCircleIcon />
            Create a new invoice
          </Button>
        </Box>
        {content && <Box>{content}</Box>}
      </Box>
      {listTab?.map((item, i) => (
        <CustomTabPanel key={i} value={value} index={i}>
          {item?.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default TabPanelCustom;
