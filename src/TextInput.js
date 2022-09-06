import React from 'react'
const TextInput = ({
  className,
  desc,
  height,
  title,
  width,
}) => {
  return (
      <svg
        {...{ className }}
        width={width ? width : height ? undefined : "320"}
        height={height ? height : undefined}
        viewBox="0 0 320 64" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <rect width="320" height="64" fill="white" style="mix-blend-mode:multiply"/><path d="M2.124 13V9.424H4.452C5.952 9.424 6.792 8.5 6.792 7.024C6.792 5.548 5.952 4.624 4.452 4.624H1.116V13H2.124ZM2.124 5.512H4.452C5.244 5.512 5.712 5.944 5.712 6.712V7.336C5.712 8.104 5.244 8.536 4.452 8.536H2.124V5.512ZM13.5402 13V12.16H12.8322V8.752C12.8322 7.444 11.9442 6.664 10.4562 6.664C9.34016 6.664 8.59616 7.216 8.26016 7.876L8.83616 8.416C9.17216 7.852 9.66416 7.492 10.4082 7.492C11.3922 7.492 11.8722 7.972 11.8722 8.848V9.46H10.6482C8.84816 9.46 8.00816 10.108 8.00816 11.272C8.00816 12.424 8.77616 13.144 10.0842 13.144C10.9482 13.144 11.6082 12.748 11.8722 11.992H11.9322C12.0042 12.568 12.2922 13 13.0002 13H13.5402ZM10.2402 12.328C9.49616 12.328 9.01616 11.98 9.01616 11.368V11.116C9.01616 10.516 9.50816 10.18 10.6002 10.18H11.8722V11.2C11.8722 11.836 11.1882 12.328 10.2402 12.328ZM17.0903 13.144C18.5063 13.144 19.3823 12.412 19.3823 11.212C19.3823 10.276 18.8543 9.676 17.4863 9.472L17.0063 9.4C16.2383 9.28 15.8183 9.04 15.8183 8.44C15.8183 7.852 16.2383 7.48 17.0303 7.48C17.8223 7.48 18.3503 7.852 18.6263 8.236L19.2623 7.66C18.7583 7.036 18.0983 6.664 17.1023 6.664C15.8423 6.664 14.8943 7.264 14.8943 8.488C14.8943 9.64 15.7463 10.108 16.8863 10.276L17.3783 10.348C18.1943 10.468 18.4583 10.84 18.4583 11.32C18.4583 11.956 17.9783 12.328 17.1623 12.328C16.3823 12.328 15.8063 11.98 15.3263 11.38L14.6423 11.932C15.1943 12.664 15.9503 13.144 17.0903 13.144ZM23.1877 13.144C24.6037 13.144 25.4797 12.412 25.4797 11.212C25.4797 10.276 24.9517 9.676 23.5837 9.472L23.1037 9.4C22.3357 9.28 21.9157 9.04 21.9157 8.44C21.9157 7.852 22.3357 7.48 23.1277 7.48C23.9197 7.48 24.4477 7.852 24.7237 8.236L25.3597 7.66C24.8557 7.036 24.1957 6.664 23.1997 6.664C21.9397 6.664 20.9917 7.264 20.9917 8.488C20.9917 9.64 21.8437 10.108 22.9837 10.276L23.4757 10.348C24.2917 10.468 24.5557 10.84 24.5557 11.32C24.5557 11.956 24.0757 12.328 23.2597 12.328C22.4797 12.328 21.9037 11.98 21.4237 11.38L20.7397 11.932C21.2917 12.664 22.0477 13.144 23.1877 13.144ZM28.3978 13H29.5618L30.4258 10.024L30.9538 8.14H30.9778L31.5178 10.024L32.3818 13H33.5698L35.2138 6.808H34.3138L33.6418 9.484L33.0058 12.196H32.9818L32.2138 9.484L31.4098 6.808H30.5578L29.7778 9.484L29.0218 12.196H28.9978L28.3378 9.484L27.6778 6.808H26.7418L28.3978 13ZM39.2022 13.144C40.8582 13.144 41.9982 11.872 41.9982 9.904C41.9982 7.936 40.8582 6.664 39.2022 6.664C37.5462 6.664 36.4062 7.936 36.4062 9.904C36.4062 11.872 37.5462 13.144 39.2022 13.144ZM39.2022 12.292C38.1702 12.292 37.4382 11.656 37.4382 10.348V9.46C37.4382 8.152 38.1702 7.516 39.2022 7.516C40.2342 7.516 40.9662 8.152 40.9662 9.46V10.348C40.9662 11.656 40.2342 12.292 39.2022 12.292ZM44.857 13V8.8C44.857 8.212 45.481 7.768 46.513 7.768H47.077V6.808H46.705C45.697 6.808 45.133 7.36 44.917 7.948H44.857V6.808H43.897V13H44.857ZM52.513 13H53.473V4.12H52.513V7.816H52.465C52.141 7.036 51.505 6.664 50.653 6.664C49.105 6.664 48.133 7.924 48.133 9.904C48.133 11.884 49.105 13.144 50.653 13.144C51.505 13.144 52.093 12.76 52.465 11.992H52.513V13ZM50.917 12.28C49.837 12.28 49.165 11.536 49.165 10.432V9.376C49.165 8.272 49.837 7.528 50.917 7.528C51.793 7.528 52.513 8.032 52.513 8.716V11.02C52.513 11.824 51.793 12.28 50.917 12.28Z" fill="#525252"/><rect width="320" height="40" transform="translate(0 24)" fill="#A8A8A8"/><g clipPath="url(#clip0_19_15624)"><path d="M18.176 52.192C18.848 52.192 19.152 51.808 19.152 51.264V51.056C19.152 50.512 18.848 50.128 18.176 50.128C17.504 50.128 17.2 50.512 17.2 51.056V51.264C17.2 51.808 17.504 52.192 18.176 52.192ZM22.5354 52.192C23.2074 52.192 23.5114 51.808 23.5114 51.264V51.056C23.5114 50.512 23.2074 50.128 22.5354 50.128C21.8634 50.128 21.5594 50.512 21.5594 51.056V51.264C21.5594 51.808 21.8634 52.192 22.5354 52.192ZM26.8948 52.192C27.5668 52.192 27.8708 51.808 27.8708 51.264V51.056C27.8708 50.512 27.5668 50.128 26.8948 50.128C26.2228 50.128 25.9188 50.512 25.9188 51.056V51.264C25.9188 51.808 26.2228 52.192 26.8948 52.192ZM31.2541 52.192C31.9261 52.192 32.2301 51.808 32.2301 51.264V51.056C32.2301 50.512 31.9261 50.128 31.2541 50.128C30.5821 50.128 30.2781 50.512 30.2781 51.056V51.264C30.2781 51.808 30.5821 52.192 31.2541 52.192ZM35.6135 52.192C36.2855 52.192 36.5895 51.808 36.5895 51.264V51.056C36.5895 50.512 36.2855 50.128 35.6135 50.128C34.9415 50.128 34.6375 50.512 34.6375 51.056V51.264C34.6375 51.808 34.9415 52.192 35.6135 52.192ZM39.9729 52.192C40.6449 52.192 40.9489 51.808 40.9489 51.264V51.056C40.9489 50.512 40.6449 50.128 39.9729 50.128C39.3009 50.128 38.9969 50.512 38.9969 51.056V51.264C38.9969 51.808 39.3009 52.192 39.9729 52.192ZM44.3323 52.192C45.0043 52.192 45.3083 51.808 45.3083 51.264V51.056C45.3083 50.512 45.0043 50.128 44.3323 50.128C43.6603 50.128 43.3563 50.512 43.3563 51.056V51.264C43.3563 51.808 43.6603 52.192 44.3323 52.192ZM48.6916 52.192C49.3636 52.192 49.6676 51.808 49.6676 51.264V51.056C49.6676 50.512 49.3636 50.128 48.6916 50.128C48.0196 50.128 47.7156 50.512 47.7156 51.056V51.264C47.7156 51.808 48.0196 52.192 48.6916 52.192ZM53.051 52.192C53.723 52.192 54.027 51.808 54.027 51.264V51.056C54.027 50.512 53.723 50.128 53.051 50.128C52.379 50.128 52.075 50.512 52.075 51.056V51.264C52.075 51.808 52.379 52.192 53.051 52.192ZM57.4104 52.192C58.0824 52.192 58.3864 51.808 58.3864 51.264V51.056C58.3864 50.512 58.0824 50.128 57.4104 50.128C56.7384 50.128 56.4344 50.512 56.4344 51.056V51.264C56.4344 51.808 56.7384 52.192 57.4104 52.192ZM61.7698 52.192C62.4418 52.192 62.7458 51.808 62.7458 51.264V51.056C62.7458 50.512 62.4418 50.128 61.7698 50.128C61.0978 50.128 60.7938 50.512 60.7938 51.056V51.264C60.7938 51.808 61.0978 52.192 61.7698 52.192ZM66.1291 52.192C66.8011 52.192 67.1051 51.808 67.1051 51.264V51.056C67.1051 50.512 66.8011 50.128 66.1291 50.128C65.4571 50.128 65.1531 50.512 65.1531 51.056V51.264C65.1531 51.808 65.4571 52.192 66.1291 52.192ZM70.4885 52.192C71.1605 52.192 71.4645 51.808 71.4645 51.264V51.056C71.4645 50.512 71.1605 50.128 70.4885 50.128C69.8165 50.128 69.5125 50.512 69.5125 51.056V51.264C69.5125 51.808 69.8165 52.192 70.4885 52.192Z" fill="#525252"/></g><rect x="0.5" y="24.5" width="319" height="39" fill="#E0E0E0" stroke="#8D8D8D"/><defs><clipPath id="clip0_19_15624"><rect width="288" height="18" fill="white" transform="translate(16 35)"/></clipPath></defs>
      </svg>
  )
}
export default TextInput
