import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Users from '.';

// Initial value for reducer
const initialState = {
    users: [],
    loading: false,
    message: {},
};

// Create mock reducer
const mockReducer = (state = initialState, action) => {
    return state;
};

// Create a mock store
const mockStore = configureStore({
    reducer: {
        user: mockReducer,
    },
});

describe('Users Component', () => {
    test('renders without crashing', () => {
        render(
            <Provider store={mockStore}>
                <Users />
            </Provider>
        );
    });

    test('renders the users table with no users', () => {
        render(
            <Provider store={mockStore}>
                <Users />
            </Provider>
        );

        const noUsersText = screen.getByText('No Users found.');
        expect(noUsersText).toBeInTheDocument();

        const addUserButton = screen.getByRole('button', { name: /Add User/i });
        expect(addUserButton).toBeInTheDocument();
    });

    test('handles user interactions and shows modal', async () => {
        render(
            <Provider store={mockStore}>
                <Users />
            </Provider>
        );

        const addUserButton = screen.getByRole('button', { name: /Add User/i });
        await fireEvent.click(addUserButton);
    });

    test('checking all form field in the document', async () => {
        render(
            <Provider store={mockStore}>
                <Users />
            </Provider>
        );

        const addUserButton = screen.getByRole('button', { name: /Add User/i });
        fireEvent.click(addUserButton);

        const firstNameInput = screen.getByPlaceholderText('Enter First Name');
        const lastNameInput = screen.getByPlaceholderText('Enter Last Name');
        const emailInput = screen.getByPlaceholderText('Enter Email');
        const passwordInput = screen.getByPlaceholderText('Enter Password');
        const mobileInput = screen.getByPlaceholderText('Enter Mobile');
        const dateOfBirthInput = screen.getByPlaceholderText('Enter Date of Birth');
        // const countryInput = screen.getByLabelText('Country');
        const genderInput = screen.getByLabelText('Gender');
        const readingCheckbox = screen.getByLabelText('Reading');
        const travelingCheckbox = screen.getByLabelText('Traveling');
        const submitButton = screen.getByText('Add');

        // fireEvent.change(firstNameInput, { target: { value: 'John' } });
        // fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        // fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        // fireEvent.change(passwordInput, { target: { value: 'password123' } });
        // fireEvent.change(mobileInput, { target: { value: '1234567890' } });
        // fireEvent.change(dateOfBirthInput, { target: { value: '2000-01-01' } });
        // fireEvent.change(countryInput, { target: { value: 'us' } });
        // fireEvent.click(screen.getByLabelText('Male')); 
        // fireEvent.click(readingCheckbox);
        // fireEvent.click(travelingCheckbox);


        const closeButton = screen.getByText("Close");
        fireEvent.click(closeButton);

    });

    // test('searches for users', async () => {
    //     render(
    //         <Provider store={mockStore}>
    //             <Users />
    //         </Provider>
    //     );

    //     const searchInput = screen.getByText('Search...');
    //     expect(searchInput).toBeInTheDocument();

    //     // Assert that only users with "John" in their name are displayed
    //     // ...
    // });


});
