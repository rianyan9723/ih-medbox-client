import WebFont from 'webfontloader';
import { useEffect } from 'react';

function CustomFont () {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Poppins', 'Open Sans']
          }
        });
      }, []);
}

export default CustomFont;