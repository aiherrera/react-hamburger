export interface HamburgerProps {
  /**
   * Wether or not the hamburger is open
   */
  isOpened?: boolean;
  /**
   * What bar color to use?
   */
  color?: string;
  /**
   * How large it should be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Where is going to be located
   */
  direction?: 'right' | 'left' | 'otro';
  /**
   * Distance from the top
   */
  top?: string;
  /**
   * Distance from the right
   */
  right?: string;
  /**
   * Distance from the left
   */
  left?: string;
  /**
   * Wether or not is shown only on mobile devices
   */
  device?: 'all' | 'mobile' | 'tablet';
  /**
   * Optional click handler
   */
  handleClick?: () => void;
}
