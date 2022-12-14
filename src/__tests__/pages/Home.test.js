import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from '../../pages/Home';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  test('render Home', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    
    const inputEmail = screen.getByPlaceholderText('Name');
    
    fireEvent.change(inputEmail, {
      target: { value: 'adan' },
    });
    
    const button = await screen.findByText('Join');
    fireEvent.submit(button);
    
    const appTitle = screen.getByText(/Create new player/i);
    expect(appTitle).toBeInTheDocument();
  });
});
