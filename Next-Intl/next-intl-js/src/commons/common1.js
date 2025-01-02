import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import clsx from 'clsx';

export default function LocaleSwitcherSelect({
    children, defaultValue, MenuProps, list = [], value, onChange, label, placeholder, minWidth = 120, sx = {}, ...props 

}) {
  const router = useRouter();
//   const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  console.log('pathname from shared component - ', pathname)
  console.log('params from shared component - ', params)

  console.log('children - ', children)
  console.log('defaultValue - ', defaultValue)
  console.log("label", label)

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    // startTransition(() => {
      router.replace(
        { pathname, params },
        { locale: nextLocale }
      );
    // });
  }

  return (
    <FormControl 
    //   fullWidth
    variant="standard" 
    //   disabled={isPending} 
    //   className={clsx('relative text-gray-400', isPending && 'opacity-30')}
    sx={{
      m: 1, minWidth,
      ...sx
    }} {...props}
     
    >
      {/* <InputLabel id="locale-select-label">{label}</InputLabel> */}
      <Select
        labelId="locale-select-label"
        id="locale-dropdown"
        label={label}
        value={defaultValue}
        onChange={onSelectChange}
        placeholder={placeholder || 'Select an option'}
        MenuProps={MenuProps}
        // IconComponent={() => (
        //   isPending ? 
        //     <CircularProgress size={16} className="ml-2" /> : 
        //     <span>⌄</span>
        // )}
      >
        {children.map((child, index) => (
            
          <MenuItem key={index} value={child.props.value}>
            {child.props.value}
          </MenuItem>
        ))}

      </Select>
    </FormControl>
  );
}
