import { getCart, isLog } from '@/components/servercomp/servercomp';
import Cart from './cart';

jest.mock('@/components/servercomp/servercomp', () => ({
  getCart: jest.fn(),
  isLog: jest.fn(),
}));

describe('Cart functionality', () => {
  describe('fetchCartData function', () => {
    it('should fetch and return cart data for a logged-in user', async () => {
      const mockCartData = {
        body: {
          lineItems: [],
        },
      };

      const mockLogResult = {
        value: 'mockUserId',
        anon: false,
        token: 'mockToken',
      };

      (isLog as jest.Mock).mockResolvedValueOnce(mockLogResult);
      (getCart as jest.Mock).mockResolvedValueOnce(mockCartData);

      const cartData = await Cart.fetchCartData();
      expect(cartData).toEqual(mockCartData);
    });

    it('should return null if user is not logged in', async () => {
      (isLog as jest.Mock).mockResolvedValueOnce(null);

      const cartData = await Cart.fetchCartData();
      expect(cartData).toBeNull();
    });
  });
});
