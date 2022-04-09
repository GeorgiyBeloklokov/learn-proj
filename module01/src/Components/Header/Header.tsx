import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { characterAPI } from '../ApiService/ApiService';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHeaderProps {
  searchInputData: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHeaderState {
  searchValue: string;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  componentDidMount() {
    const isData = localStorage.getItem('searchValue') || 'no data';
    this.setState({ searchValue: isData });
  }

  handleChange = (event: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
    this.setState({ searchValue: event.target.value });
    localStorage.setItem('searchValue', event.target.value);
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = async () => {
    const base: Array<string> = [];
    base.push(this.state.searchValue);
    const examples: Array<string> = ['character', 'Character'];
    const isMatchWord = examples.some((el) => base.includes(el));
    if (isMatchWord) {
      this.props.setState({ searchInputData: true });
    }
  };

  public render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              RSSchool
            </Typography>
            <Stack spacing={2} direction="row">
              <Button color="primary" variant="contained" component={Link} to={'/'}>
                Home
              </Button>
              <Button color="primary" variant="contained" component={Link} to={'/form'}>
                Form
              </Button>
              <Button color="primary" variant="contained" component={Link} to={'/aboutus'}>
                About us
              </Button>
              <Button variant="contained" disabled>
                Contained
              </Button>
            </Stack>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                data-testid="search"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={this.state.searchValue}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
