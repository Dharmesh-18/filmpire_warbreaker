import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({

    rule: {
        backgroundColor: theme.palette.mode === "light" ? 'blue': 'red',
    },
  
}));
