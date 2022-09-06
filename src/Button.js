import React from 'react'
const Button = ({
  className,
  desc,
  height,
  title,
  width,
}) => {
  return (
      <svg
        {...{ className }}
        width={width ? width : height ? undefined : "321"}
        height={height ? height : undefined}
        viewBox="0 0 321 40" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <rect width="321" height="40" fill="#0F62FE"/><path d="M22.636 25V23.964H18.478V15.228H17.302V25H22.636ZM26.957 25.168C28.889 25.168 30.219 23.684 30.219 21.388C30.219 19.092 28.889 17.608 26.957 17.608C25.025 17.608 23.695 19.092 23.695 21.388C23.695 23.684 25.025 25.168 26.957 25.168ZM26.957 24.174C25.753 24.174 24.899 23.432 24.899 21.906V20.87C24.899 19.344 25.753 18.602 26.957 18.602C28.161 18.602 29.015 19.344 29.015 20.87V21.906C29.015 23.432 28.161 24.174 26.957 24.174ZM38.3109 25.798C38.3109 24.608 37.5409 23.88 35.7489 23.88H34.2089C33.5509 23.88 33.1029 23.768 33.1029 23.334C33.1029 22.886 33.5789 22.648 34.0549 22.522C34.2649 22.564 34.5169 22.592 34.7549 22.592C36.4069 22.592 37.4849 21.57 37.4849 20.1C37.4849 19.33 37.1769 18.686 36.6589 18.238V17.776H38.0309V16.796H36.9529C36.3509 16.796 36.1129 17.202 36.1129 17.762V17.888C35.7209 17.706 35.2589 17.608 34.7409 17.608C33.1029 17.608 32.0249 18.63 32.0249 20.1C32.0249 21.108 32.5289 21.906 33.3829 22.312V22.368C32.6549 22.55 32.1369 22.9 32.1369 23.628C32.1369 24.118 32.3749 24.44 32.7809 24.636V24.79C32.0669 24.986 31.6329 25.406 31.6329 26.19C31.6329 27.324 32.5569 27.968 34.8109 27.968C37.1349 27.968 38.3109 27.282 38.3109 25.798ZM37.2609 25.882C37.2609 26.666 36.5329 27.058 35.2869 27.058H34.2509C33.1169 27.058 32.6829 26.54 32.6829 25.91C32.6829 25.462 32.8929 25.14 33.3549 24.93H35.7629C36.8829 24.93 37.2609 25.308 37.2609 25.882ZM34.7549 21.696C33.8029 21.696 33.2009 21.248 33.2009 20.296V19.904C33.2009 18.952 33.8029 18.504 34.7549 18.504C35.7069 18.504 36.3089 18.952 36.3089 19.904V20.296C36.3089 21.248 35.7069 21.696 34.7549 21.696ZM43.806 16.082C44.282 16.082 44.492 15.83 44.492 15.452V15.27C44.492 14.892 44.282 14.64 43.806 14.64C43.33 14.64 43.12 14.892 43.12 15.27V15.452C43.12 15.83 43.33 16.082 43.806 16.082ZM43.246 25H44.366V17.776H43.246V25ZM48.026 25V19.988C48.026 19.064 48.894 18.616 49.79 18.616C50.868 18.616 51.428 19.274 51.428 20.562V25H52.548V20.366C52.548 18.616 51.61 17.608 50.126 17.608C49.048 17.608 48.432 18.14 48.082 18.952H48.026V17.776H46.906V25H48.026Z" fill="white"/>
      </svg>
  )
}
export default Button
