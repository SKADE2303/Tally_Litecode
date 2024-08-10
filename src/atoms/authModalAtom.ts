import {atom} from 'recoil'

// This is the state of the user's login
type AuthModalState = {
    isOpen: boolean;
    type: 'login'|'register'|'forgotPassword';
}

// State when the user comes to the website for the first time
const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type: 'login',
}


//??? Read the docs
export const authModalState = atom<AuthModalState>({
    key: 'autoModalState',
    default: initialAuthModalState,
});

// Used for Global state managemanet. Read the docs for Recoil