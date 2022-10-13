import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from '../../pages/Home';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  test('render Home', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
      { wrapper: BrowserRouter },
    );

    const appTitle = screen.getByText(/Create new player/i);
    expect(appTitle).toBeInTheDocument();
  });
});
