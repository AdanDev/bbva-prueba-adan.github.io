import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Game } from '../../pages/Game';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  test('render Home', async () => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>,
      { wrapper: BrowserRouter },
    );

  });
});
