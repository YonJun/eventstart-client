import { useMediaQuery } from 'react-responsive';
import { theme } from 'twin.macro';

const SizeQuery = {
  '3col': theme`screens.lg`,
  '2col': theme`screens.md`,
  '1col': theme`screens.sm`,
};

export const useScreenType = () => {
  const is3Cols = useMediaQuery({ minWidth: SizeQuery['3col'] });
  const is2Cols = useMediaQuery({ minWidth: SizeQuery['2col'] });
  const is1Cols = useMediaQuery({ minWidth: SizeQuery['1col'] });

  if (is3Cols) {
    return '3-cols';
  }
  if (is2Cols) {
    return '2-cols';
  }
  if (is1Cols) {
    return '1-cols';
  }

  return 'fullscreen';
};
