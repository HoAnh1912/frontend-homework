import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import './style.scss';
import { ITextfieldHook } from './textfield.type';

const TextFieldHook = ({ control, name, placeholder }: ITextfieldHook) => {
  return (
    <div className="textfield-hook">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        // rules={{ required: 'First name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={placeholder}
            //   label="First Name"
            variant="outlined"
            // fullWidth
            margin="normal"
            sx={{
              width: '100%',
              input: {
                padding: '11px'
              },
              '.MuiInputBase-root': {
                borderRadius: '10px',
                background: '#80808026'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(0 0 0 / 0%)'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(0 0 0 / 0%) !important'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(0 0 0 / 0%) !important'
              }
            }}
          />
        )}
      />
    </div>
  );
};

export default TextFieldHook;
