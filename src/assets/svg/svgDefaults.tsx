export interface IlogoDefault {
  tailwind?: string
}

export const TeamLogoDefault: React.FC<IlogoDefault> = ({ tailwind }) => {
  return (
    <svg
      className={`${tailwind} `}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5215 2.94922L24.043 4.44336L22.4121 4.47266C21.1914 4.49219 20.8008 4.53125 20.8301 4.61914C20.8496 4.67774 21.3672 5.09766 21.9824 5.54688C22.5977 5.98633 23.1543 6.40625 23.2227 6.47461C23.3203 6.57227 23.252 6.89453 22.8613 8.08594C22.5977 8.90625 22.4219 9.58985 22.4609 9.61914C22.5 9.64844 22.7246 9.52149 22.959 9.34571C23.1934 9.16992 23.7695 8.75 24.2383 8.40821L25.0879 7.79297L26.3867 8.74024C27.0996 9.25781 27.6953 9.63867 27.7148 9.58008C27.7344 9.52149 27.5391 8.81836 27.2852 8.00781C27.0313 7.20703 26.8457 6.52344 26.8652 6.50391C26.8848 6.48438 27.4707 6.06446 28.1543 5.56641C28.8477 5.06836 29.375 4.62891 29.3262 4.58008C29.2773 4.53125 28.5449 4.48242 27.6856 4.47266L26.1328 4.44336L25.6445 2.94922C25.3711 2.13867 25.1172 1.46485 25.0781 1.46485C25.0391 1.46485 24.7949 2.13867 24.5215 2.94922Z"
        // fill="black"
      />
      <path
        d="M14.7852 8.48633C13.8086 8.81836 12.7734 9.66797 12.3242 10.498L12.1582 10.791L12.1094 10.2246C12.0801 9.88281 12.002 9.62891 11.9141 9.57031C11.5918 9.375 10.8301 10.1074 10.4297 11.0059C10.2637 11.3574 10.2051 11.6992 10.1856 12.3438L10.166 13.2227L9.7461 13.6426L9.32618 14.0723L9.26758 13.3301C9.21875 12.7441 9.1211 12.4219 8.84766 11.8555C8.29102 10.7422 7.96875 10.7031 7.57813 11.6992C7.20704 12.6758 7.31446 13.9551 7.86133 15.0391L8.10547 15.5273L7.63672 16.2402C7.37305 16.6211 7.03125 17.1582 6.875 17.4316L6.5918 17.9199L6.52344 17.3047C6.43555 16.4551 6.21094 15.8496 5.75196 15.1367C5.28321 14.4141 5.12696 14.3359 4.82422 14.6777C4.26758 15.332 4.03321 17.0996 4.34571 18.3105C4.52149 18.9648 5 19.9609 5.29297 20.2734C5.49805 20.498 5.51758 20.4004 4.92188 22.3438C4.90235 22.4219 4.69727 22.207 4.4629 21.8555C4.01368 21.1816 2.96875 20.3223 2.2754 20.0586C1.66993 19.8242 1.52344 19.9707 1.5918 20.7031C1.75782 22.2266 2.5 23.4082 3.90625 24.375L4.54102 24.8047L4.51172 26.2988L4.48243 27.7832L4.27735 27.4902C3.8086 26.8262 2.99805 26.1621 2.11915 25.7324C0.673833 25.0195 0.351567 25.1074 0.566411 26.1426C0.917973 27.832 2.49024 29.5605 4.36524 30.3223L4.93165 30.5566L5.23438 31.5625C5.4004 32.1191 5.625 32.8027 5.74219 33.0957L5.94727 33.6328L5.53711 33.2422C5.3125 33.0273 4.96094 32.7344 4.76563 32.5879C3.86719 31.9336 1.95313 31.4551 0.761723 31.5918C-0.224605 31.709 -0.224605 32.002 0.771489 32.998C1.47461 33.7109 2.13868 34.1309 3.11524 34.4629C3.90625 34.7363 5.13672 34.9023 5.92774 34.834C6.26954 34.8145 6.54297 34.8242 6.54297 34.8633C6.54297 34.9023 6.75782 35.293 7.02149 35.7227C7.28516 36.1621 7.49024 36.5234 7.49024 36.5234C7.48047 36.5234 7.15821 36.3965 6.78711 36.2402C5.80079 35.8398 5.21485 35.7422 3.87696 35.7324C2.14844 35.7324 2.03125 35.9863 3.1836 37.207C4.60938 38.7109 6.19141 39.3555 8.63282 39.4141L9.90235 39.4434L10.4883 40.0195C12.9785 42.4609 16.5723 44.3457 20.2637 45.166L21.0352 45.3418L20.7031 45.5957C19.6875 46.3574 18.457 47.7637 18.457 48.1543C18.457 48.457 18.8965 48.5645 19.9414 48.5059C21.6113 48.4082 23.1152 47.7441 24.3945 46.5332L25.0488 45.918L25.5859 46.4063C26.6699 47.3828 27.8809 48.0762 29.0039 48.3496C29.8047 48.5449 31.3965 48.5254 31.5918 48.3301C31.7481 48.1836 31.7481 48.1445 31.6016 47.8613C31.3379 47.3535 30.3223 46.25 29.6875 45.7715C29.0918 45.3223 29.0918 45.3223 29.3652 45.2539C33.4766 44.3262 36.6699 42.6953 39.3652 40.1563L40.127 39.4434L41.377 39.4141C43.8086 39.3555 45.3906 38.7109 46.8164 37.207C47.9688 35.9863 47.8516 35.7324 46.1231 35.7324C44.7852 35.7422 44.1992 35.8398 43.2129 36.2402C42.8418 36.3965 42.5195 36.5234 42.5098 36.5234C42.5098 36.5234 42.7148 36.1621 42.9785 35.7227C43.2422 35.293 43.457 34.9023 43.457 34.8633C43.457 34.8242 43.7305 34.8145 44.0723 34.834C44.8633 34.9023 46.0938 34.7363 46.8848 34.4629C47.8613 34.1309 48.5254 33.7109 49.2285 32.998C50.2246 32.002 50.2246 31.709 49.2383 31.5918C48.0469 31.4551 46.1328 31.9336 45.2344 32.5879C45.0391 32.7344 44.6875 33.0273 44.4629 33.2422L44.0527 33.6328L44.2578 33.0957C44.375 32.8027 44.5996 32.1191 44.7656 31.5625L45.0684 30.5566L45.6348 30.3223C47.5098 29.5605 49.082 27.832 49.4336 26.1426C49.6484 25.1074 49.3262 25.0195 47.8809 25.7324C47.002 26.1621 46.1914 26.8262 45.7227 27.4902L45.5176 27.7832L45.4883 26.2988L45.459 24.8047L46.0938 24.375C47.5 23.4082 48.2422 22.2266 48.4082 20.7031C48.4766 19.9707 48.3301 19.8242 47.7246 20.0586C47.0313 20.3223 45.9863 21.1816 45.5371 21.8555C45.3027 22.207 45.0977 22.4219 45.0781 22.3438C44.4824 20.4004 44.502 20.498 44.707 20.2734C45 19.9609 45.4785 18.9648 45.6543 18.3105C45.9668 17.0996 45.7324 15.332 45.1758 14.6777C44.8731 14.3359 44.7168 14.4141 44.2481 15.1367C43.7891 15.8496 43.5645 16.4551 43.4766 17.3047L43.4082 17.9199L43.125 17.4316C42.9688 17.1582 42.627 16.6211 42.3633 16.2402L41.8945 15.5273L42.1387 15.0391C42.6856 13.9551 42.793 12.6758 42.4219 11.6992C42.0313 10.7031 41.709 10.7422 41.1523 11.8555C40.8789 12.4219 40.7813 12.7441 40.7324 13.3301L40.6738 14.0723L40.2539 13.6426L39.834 13.2227L39.8145 12.3438C39.7949 11.6992 39.7363 11.3574 39.5703 11.0059C39.1699 10.1074 38.4082 9.375 38.0859 9.57031C37.9981 9.62891 37.9199 9.88281 37.8906 10.2246L37.8418 10.791L37.6367 10.4492C37.0996 9.54102 36.0742 8.73047 35.0879 8.44727C34.5898 8.30078 34.5313 8.30078 34.3848 8.4375C34.2481 8.58398 34.2481 8.63281 34.3945 9.03321C34.7363 9.95117 35.5078 10.8691 36.2598 11.2598C36.4648 11.3672 36.377 11.377 35.6055 11.3477C34.0723 11.2793 33.8184 11.5723 34.6973 12.3633C35.6641 13.2422 36.9043 13.6035 38.2031 13.3984L38.916 13.2813L39.5313 13.9355C40.1563 14.6094 41.4063 16.2012 41.4063 16.3281C41.4063 16.3672 41.1719 16.2305 40.8984 16.0156C40.2637 15.5371 39.5313 15.2441 38.5938 15.1074C37.4121 14.9316 37.2266 15.2441 37.9492 16.2012C38.4277 16.8457 39.3262 17.5391 40.0195 17.8125C40.459 17.9785 41.9824 18.1738 42.2754 18.0957C42.4023 18.0664 42.5195 18.2031 42.7539 18.7207C43.0176 19.3066 43.457 20.459 43.457 20.5762C43.457 20.6055 43.2324 20.4199 42.959 20.1758C42.3535 19.6289 41.4746 19.1992 40.6445 19.0332C40.1074 18.9355 40.0098 18.9355 39.8731 19.0723C39.7363 19.209 39.7363 19.2578 39.8828 19.6387C40.4785 21.1328 41.875 22.2852 43.4277 22.5781L44.0234 22.6855L44.1406 23.4277C44.3066 24.5313 44.3848 26.8164 44.2676 26.8848C44.1992 26.9238 44.1309 26.7969 44.0918 26.582C43.9648 25.8301 43.2617 24.5898 42.6367 23.9746C42.0606 23.4082 41.0156 22.7539 40.6836 22.7539C40.459 22.7539 40.3125 23.1055 40.3809 23.5156C40.6152 24.9707 40.9766 25.752 41.8262 26.6309C42.4316 27.2656 43.5449 27.9297 43.9941 27.9297C44.1992 27.9297 44.209 27.9492 44.1211 28.4863C44.0137 29.209 43.6914 30.5762 43.4961 31.1816C43.3301 31.6992 43.1641 31.709 43.1641 31.2012C43.1641 30.6543 42.7246 29.4336 42.2754 28.75C41.7773 27.9883 40.8594 27.1289 40.5762 27.168C40.2148 27.2168 40.0879 27.6855 40.0879 28.9551C40.0977 30.7813 40.4883 31.7285 41.7578 32.9688L42.4707 33.6719L42.0606 34.3945C41.6309 35.1367 40.7227 36.4453 40.2734 36.9629C40.0293 37.2461 40.0195 37.2461 40.0879 37.0117C40.1172 36.875 40.2246 36.3672 40.3125 35.8691C40.5859 34.3359 40.2832 32.8418 39.4531 31.5527C38.8672 30.6543 38.6328 30.6445 38.1641 31.5039C37.5391 32.627 37.2559 34.3555 37.5 35.5664C37.6367 36.3086 38.0566 37.2559 38.5254 37.9004C38.7109 38.1641 38.8672 38.4082 38.8672 38.457C38.8672 38.5547 37.4805 39.7266 36.6211 40.332C34.1406 42.1094 31.1523 43.3008 27.9199 43.8086C26.5332 44.0234 23.4668 44.0234 22.0801 43.8086C18.8477 43.3008 15.8594 42.1094 13.3789 40.332C12.5195 39.7266 11.1328 38.5547 11.1328 38.457C11.1328 38.4082 11.2891 38.1641 11.4746 37.9004C11.9434 37.2559 12.3633 36.3086 12.5 35.5664C12.7441 34.3555 12.4609 32.627 11.8359 31.5039C11.3672 30.6445 11.1328 30.6543 10.5469 31.5527C10.0293 32.3633 9.76563 33.0859 9.63868 34.1113C9.55079 34.834 9.55079 35.1172 9.6875 35.8691C9.7754 36.3672 9.88282 36.875 9.91211 37.0117C9.98047 37.2461 9.97071 37.2461 9.72657 36.9629C9.27735 36.4453 8.36915 35.1367 7.93946 34.3945L7.5293 33.6719L8.24219 32.9688C9.51172 31.7285 9.90235 30.7813 9.91211 28.9551C9.91211 27.6855 9.78516 27.2168 9.42383 27.168C9.14063 27.1289 8.22266 27.9883 7.72461 28.75C7.2754 29.4336 6.83594 30.6543 6.83594 31.2012C6.83594 31.709 6.66993 31.6992 6.50391 31.1816C6.3086 30.5762 5.98633 29.209 5.87891 28.4863C5.79102 27.9492 5.80079 27.9297 6.00586 27.9297C6.45508 27.9297 7.56836 27.2656 8.17383 26.6309C9.02344 25.752 9.38477 24.9707 9.61915 23.5156C9.6875 23.1055 9.54102 22.7539 9.31641 22.7539C8.98438 22.7539 7.93946 23.4082 7.36329 23.9746C6.73829 24.5898 6.03516 25.8301 5.90821 26.582C5.86915 26.7969 5.80079 26.9238 5.73243 26.8848C5.61524 26.8164 5.69336 24.5313 5.85938 23.4277L5.97657 22.6855L6.57227 22.5781C8.125 22.2852 9.52149 21.1328 10.1172 19.6387C10.2637 19.2578 10.2637 19.209 10.127 19.0723C9.76563 18.7109 7.94922 19.3652 7.04102 20.1758C6.76758 20.4199 6.54297 20.6055 6.54297 20.5762C6.54297 20.459 6.98243 19.3066 7.2461 18.7207C7.48047 18.2031 7.59766 18.0664 7.72461 18.0957C8.01758 18.1738 9.54102 17.9785 9.98047 17.8125C10.6738 17.5391 11.5723 16.8457 12.0508 16.2012C12.7734 15.2441 12.5879 14.9316 11.4063 15.1074C10.4688 15.2441 9.73633 15.5371 9.11133 16.0156C8.82813 16.2305 8.59375 16.3672 8.59375 16.3281C8.59375 16.2012 9.84375 14.6094 10.4688 13.9355L11.084 13.2813L11.7969 13.3984C13.0957 13.6035 14.3359 13.2422 15.3125 12.3633C16.1816 11.5723 15.9277 11.2793 14.3945 11.3477C13.6231 11.377 13.5352 11.3672 13.7402 11.2598C14.4922 10.8691 15.2637 9.95117 15.5957 9.04297C15.7324 8.68164 15.7422 8.58398 15.6348 8.45703C15.4785 8.27148 15.4199 8.27148 14.7852 8.48633Z"
        // fill="black"
      />
      <path
        d="M23.0957 11.6699C18.0469 12.4609 13.9453 15.8887 12.3242 20.6543C11.8555 22.041 11.709 22.8809 11.6504 24.5117C11.5918 26.2402 11.6992 27.1973 12.1191 28.6816C12.7246 30.8301 13.8477 32.7832 15.4102 34.3945C17.4316 36.4844 20.0391 37.832 23.0273 38.3398C24.1699 38.5352 26.709 38.4766 27.832 38.2324C29.4629 37.8711 31.25 37.1191 32.6465 36.1914C34.6094 34.8926 36.5918 32.4902 37.4805 30.3418C40.918 22.0996 35.8106 12.9883 27.0313 11.6699C25.8984 11.4941 24.1797 11.4941 23.0957 11.6699ZM22.3438 15.0293L24.5117 16.25L24.4922 18.1543L24.4629 20.0586L22.5586 21.4551C21.5137 22.2168 20.5859 22.8418 20.5078 22.8418C20.4297 22.8418 19.5898 22.5879 18.6523 22.2852L16.9434 21.7188L16.4355 19.2383L15.9277 16.748L16.4844 16.2207C17.3145 15.4395 18.3105 14.7168 19.2383 14.2188C19.6973 13.9746 20.0977 13.7793 20.127 13.7988C20.1563 13.8086 21.1523 14.3652 22.3438 15.0293ZM30.8594 14.1699C31.8652 14.7168 32.9492 15.5176 33.6328 16.2012L34.209 16.7773L33.7207 19.2383L33.2324 21.6895L31.4844 22.2754C30.2441 22.6855 29.6777 22.8418 29.5313 22.7832C29.4141 22.7441 28.5059 22.1094 27.5 21.3867L25.6836 20.0684V18.1445V16.2305L27.8613 15.0098C29.0527 14.3359 30.0488 13.7793 30.0781 13.7793C30.1074 13.7695 30.459 13.9551 30.8594 14.1699ZM18.3008 23.418L20.0488 23.9746L20.5762 25.5371C20.8594 26.3965 21.2012 27.4414 21.3281 27.8516L21.5625 28.6133L20.4395 30.0781C19.5996 31.1719 19.2578 31.543 19.1016 31.543C18.9844 31.543 17.8613 31.3867 16.6016 31.2012C14.8828 30.9473 14.2773 30.8203 14.1895 30.6934C13.7793 30.1465 13.0371 27.8418 12.9297 26.8066L12.8711 26.2207L14.7168 24.541C15.7227 23.6133 16.5527 22.8516 16.5527 22.8516C16.5527 22.8516 17.3438 23.1055 18.3008 23.418ZM35.4395 24.5313C36.4356 25.4492 37.2656 26.2695 37.2852 26.3379C37.3438 26.5527 37.0215 28.0859 36.7481 28.877C36.5527 29.4629 36.0254 30.6836 35.8984 30.8301C35.8398 30.8984 31.0352 31.5625 30.918 31.5137C30.8496 31.4844 30.293 30.8105 29.6875 30.0293L28.584 28.5938L29.3555 26.2891L30.127 23.9844L31.7871 23.4277C32.7051 23.1152 33.4863 22.8613 33.5352 22.8613C33.5742 22.8516 34.4336 23.6035 35.4395 24.5313ZM28.8574 30.918C29.4531 31.6992 29.9219 32.3828 29.9023 32.4512C29.8828 32.5195 29.4531 33.5645 28.9355 34.7754L27.998 36.9824L27.1582 37.1191C26.1035 37.2852 23.7109 37.2754 22.8223 37.0996L22.1582 36.9629L21.1816 34.6777C20.6543 33.4277 20.2441 32.3535 20.2832 32.2852C20.3223 32.2266 20.8105 31.5723 21.3672 30.8301L22.3926 29.4922H25.0879L27.7832 29.502L28.8574 30.918Z"
        // fill="black"
      />
    </svg>
  )
}

export const ChampionshipLogoDefault: React.FC<IlogoDefault> = ({ tailwind }) => {
  return (
    <svg
      className={`${tailwind} `}
      width="107"
      height="100"
      viewBox="0 0 107 100"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2979 14.6808C21.4894 21.3617 21.5745 27.7447 24.5106 33.5319C25.2766 35.1064 25.7872 36.4681 25.6596 36.5957C25.234 37.0213 22.4255 33.3617 21.1064 30.6383C19.9149 28.1702 19.7872 27.4894 19.7872 23.9149V19.9149L19.0213 21.7021C16.2979 27.9574 17.7447 34.5532 23.1489 40.2979C25.234 42.5532 25.5319 43.0213 24.6809 42.766C20.7234 41.5745 17.3617 37.5319 16 32.2128C15.4468 30.1277 15.4043 30.0425 15.1064 31.234C14.9362 31.8723 14.8936 33.7447 15.0213 35.3617C15.4894 40.8511 18.2553 44.9787 23.2766 47.6596L25.7447 48.9787L24.0426 48.766C23.1064 48.6383 21.0638 47.8723 19.4894 47.1064C17.8723 46.3404 16.5957 45.8298 16.5957 46C16.5957 46.9787 21.1915 50.0425 24.6383 51.2766C25.7021 51.6596 25.9149 51.8723 25.2766 51.8723C24.4255 51.9149 20.1277 51.234 18.5106 50.8085C16.4681 50.2553 21.0638 52.8511 23.9149 53.8298L27.0213 54.9362L23.617 54.7234C21.7447 54.6383 19.8298 54.4255 19.3617 54.2553C18.5106 53.9574 18.5106 53.9574 19.3617 54.6808C20.4681 55.5745 25.234 57.0213 27.0638 57.0213C27.8723 57.0213 28.5106 57.1915 28.5106 57.4042C28.5106 57.9149 23.8298 58.383 21.7447 58.0425C19.5745 57.7021 19.4894 58.2128 21.5745 60C22.9787 61.2766 23.3191 61.3617 25.2766 61.1489C26.4681 61.0213 27.8298 60.8085 28.2979 60.6383C28.766 60.5106 27.9574 61.0638 26.4681 61.9574L23.7872 63.4894L24.766 64.5532C25.3617 65.1915 25.5745 65.7021 25.2766 65.8723C25.0213 66.0425 24.8511 66.7234 24.8511 67.3617C24.8936 68.4681 24.6383 68.6808 20.8936 70.2553C18.6809 71.1489 16.8085 72 16.7234 72.0851C16.5957 72.1702 18.0851 73.0638 19.9574 74.0851C21.8723 75.1064 23.4043 76.0425 23.4043 76.2128C23.4043 76.383 22.7234 78.2979 21.9149 80.4681C21.0638 82.5957 20.4681 84.4255 20.5106 84.4681C20.5957 84.5106 22.9362 83.6596 25.7447 82.5106C30.7234 80.5106 30.8511 80.4255 30.7234 79.1915C30.6383 78.1702 30.766 77.9574 31.6596 77.7872C32.6383 77.5745 32.766 77.7447 32.9787 79.1064C33.1489 79.9574 33.3617 80.9787 33.5319 81.3617C33.7872 82 50.8085 93.1915 51.5745 93.1915C52.0426 93.1915 68.6809 82.5106 69.1915 81.8723C69.4894 81.5319 69.8298 80.4255 69.9574 79.4042C70.2128 77.7021 70.3404 77.5745 71.3191 77.7872C72.2979 77.9574 72.383 78.1702 72.1702 79.234C72 80.1702 72.1277 80.5106 72.6809 80.7234C73.0638 80.8511 75.4468 81.7872 78 82.766C80.5106 83.7872 82.5532 84.5106 82.5532 84.383C82.5532 84.2979 81.8723 82.383 81.0213 80.1702C80.2128 77.9149 79.5745 76.0425 79.6596 75.9574C79.7447 75.9149 81.2766 75.0638 83.1064 74.0425C84.9362 73.0638 86.3404 72.1702 86.2128 72.0425C86.1277 71.9149 84.2553 71.1064 82.0426 70.2128C78.2128 68.5957 78.0851 68.5106 78.2128 67.234C78.2553 66.5106 78.0851 65.9574 77.7872 65.9574C77.4894 65.9574 77.5319 65.7021 77.9574 65.1915C79.2766 63.6596 79.1915 63.4894 76.5106 61.9149C75.0213 61.0638 74.2128 60.4681 74.6809 60.6383C75.1489 60.8085 76.5532 61.0213 77.7872 61.1489C79.9149 61.4042 80.1277 61.3191 81.5319 59.9574C83.4468 58.1277 83.3617 57.7021 81.234 58.0425C79.1489 58.383 74.4681 57.9149 74.4681 57.4042C74.4681 57.1915 75.1064 57.0213 75.8723 57.0213C77.617 57.0213 81.0638 56.0851 82.8936 55.1489C84.6809 54.2553 84.4681 53.9149 82.5106 54.4681C81.7447 54.7234 79.9149 54.8936 78.5106 54.8936L75.9574 54.8511L79.0213 53.8723C81.7447 52.9787 85.3617 51.1489 85.0213 50.8511C84.9362 50.766 83.5745 50.9787 81.9149 51.3191C77.3617 52.2128 76.9787 52 80.2128 50.4681C82.9362 49.1915 86.6383 46.5106 86.2553 46.0851C86.1702 46 84.8511 46.5106 83.3191 47.234C81.7872 47.9574 79.7872 48.6383 78.8936 48.766L77.234 48.9787L79.5745 47.8298C82.5106 46.3404 85.4468 43.4043 86.8085 40.6383C87.5745 38.9787 87.8723 37.617 88 34.2979C88.1277 31.5319 88.0426 30.1702 87.7447 30.383C87.5319 30.5106 87.1915 31.3191 87.0213 32.2128C86.5957 34.5957 84.5106 38.2979 82.6809 40.0851C81.3191 41.4468 78.5957 42.9787 77.617 42.9787C77.4468 42.9787 78.4681 41.7872 79.8723 40.2979C82.8936 37.1915 84.383 34.4255 85.1064 30.7234C85.7021 27.8298 85.2766 24.4255 83.9149 21.234L83.1915 19.5745V23.9149C83.1915 27.8298 83.0638 28.5532 82 30.6808C80.8085 33.1064 77.4894 37.234 77.4468 36.3404C77.4468 36.0425 78 34.7234 78.6809 33.3617C81.617 27.4043 81.4043 19.5745 78.1702 13.3617C77.617 12.2979 77.5745 12.5532 77.7447 17.0638C78 22.766 77.3191 26.4255 75.2766 30.2553C73.0638 34.383 73.0213 34.383 68.8511 32.2979L65.234 30.5106L65.8723 27.3617C66.2128 25.6596 66.4255 24.1277 66.2979 24.0425C66.1702 23.9149 62.8085 22.6383 58.8085 21.234L51.5319 18.6808L44.2128 21.2766C40.1277 22.6808 36.766 23.9574 36.6808 24.0425C36.5532 24.1702 37.234 28.2553 37.7021 29.8723C37.8723 30.4255 37.0638 30.9787 34.2128 32.2979C32.1702 33.2766 30.4681 34.0425 30.383 34.0425C30.2979 34.0425 29.5745 33.0213 28.7234 31.7872C25.9149 27.617 24.5532 20.5106 25.4468 14.4681C25.6596 12.9362 25.7872 11.6596 25.7447 11.5745C25.7021 11.4894 25.0213 12.8936 24.2979 14.6808ZM58.9362 22.2553C64.8936 24.383 65.3191 24.5957 65.1915 25.5745C65.1489 26.1277 64.2979 30.5957 63.3191 35.4468L61.5745 44.3404L63.5319 46.0425C66.1702 48.2553 68 50.9787 69.1915 54.383L70.1277 57.1489L70.4255 55.4894C70.5957 54.5957 71.3617 50.7234 72.1277 46.8936L73.4894 39.9574L68.9362 37.6596C64.6809 35.5319 64.383 35.2766 64.5532 34.2979C64.6809 33.7021 64.8085 33.1915 64.8936 33.1915C64.9362 33.1915 67.4043 34.3404 70.383 35.7872C75.5745 38.2553 75.7872 38.4255 75.5745 39.4894C75.4043 40.1277 74.2979 45.7872 73.0213 52.0425C71.7872 58.2979 70.6809 63.4894 70.5957 63.5745C70.5106 63.6596 69.8298 63.617 69.1064 63.5319L67.7872 63.3191L67.5745 59.7872C67.1489 53.4894 63.9149 48.5957 58.3404 45.8298C55.7872 44.5957 55.1915 44.4681 51.4894 44.4681C47.7447 44.4681 47.1915 44.5957 44.5957 45.8723C39.0213 48.5957 35.7872 53.6596 35.5319 60L35.4043 63.1915L34 63.4894C33.1915 63.617 32.5106 63.7021 32.4255 63.6596C32.2979 63.5319 27.2766 38.5532 27.3617 38.4681C27.4043 38.4255 29.8298 37.1915 32.7234 35.7447C36.8085 33.7021 38.0851 33.234 38.3404 33.7021C39.1064 34.8936 38.5957 35.4043 34.2553 37.5319C31.7872 38.766 29.7872 39.9574 29.7872 40.2128C29.7872 40.4255 30.4681 44.3404 31.3617 48.8511L32.9362 57.0638L33.8723 54.4681C35.1064 51.0213 36.6383 48.6808 39.2766 46.2979L41.4894 44.2979L39.617 34.8085C38.5957 29.5745 37.7447 25.1489 37.7021 24.9362C37.6596 24.4681 51.1064 19.617 51.9149 19.8298C52.2553 19.9149 55.4468 21.0213 58.9362 22.2553ZM26.4681 30.4255C27.0638 31.5745 27.9574 32.9362 28.4681 33.3617C29.617 34.383 29.5745 34.6383 28.2979 35.234C27.3617 35.6596 27.1489 35.617 26.5532 34.6808C25.3191 32.766 24.2979 29.4468 24.0426 26.5106L23.8298 23.617L24.5957 25.9574C25.0638 27.234 25.8723 29.234 26.4681 30.4255ZM78.7234 28.9362C78.4255 30.2128 77.7447 32.2979 77.1489 33.4894C76.1702 35.5745 76.0426 35.7021 75.1915 35.2766C74.6809 34.9787 74.1702 34.7234 74.0851 34.6383C74 34.5532 74.6809 33.3617 75.617 32C76.5532 30.5957 77.6596 28.1702 78.1277 26.5957C78.8511 24 78.9362 23.8723 79.0638 25.1489C79.1489 25.9574 78.9787 27.6596 78.7234 28.9362ZM20.5957 33.0638C20.9362 33.7447 22.0851 35.1489 23.1489 36.2553C24.5106 37.6596 25.1064 38.6383 25.1064 39.4468V40.5957L23.6596 39.1915C22.2553 37.8298 20.383 34.766 19.7872 32.8511C19.4043 31.5745 19.8298 31.6596 20.5957 33.0638ZM82.383 34.9787C81.7872 36.2128 80.5106 38.0851 79.5745 39.1489L77.8298 41.0638L78.0426 39.4468C78.1702 38.4255 78.6383 37.5319 79.2766 37.0213C79.8298 36.5957 80.9362 35.2766 81.7447 34.0851C83.5319 31.4894 83.8298 31.9149 82.383 34.9787ZM23.9574 43.8723C25.8298 44.5106 26.2128 44.8085 26.4255 45.9149C26.5957 46.6383 26.5106 47.234 26.2979 47.234C25.234 47.234 20.8085 44.5532 19.4894 43.0638C16.7234 40 16.6809 39.2766 19.3617 41.3191C20.6809 42.2979 22.766 43.4468 23.9574 43.8723ZM85.5319 40.4681C84.1702 43.0213 80.2553 46.2128 77.5745 47.0213C76.7234 47.234 76.5957 47.1489 76.5957 46.2553C76.5957 45.0213 77.0213 44.6383 79.7021 43.6596C80.8085 43.234 82.6383 42.1702 83.7447 41.2766C86.1277 39.3191 86.1277 39.3191 85.5319 40.4681ZM35.7447 41.0638C35.7447 41.4468 36.1277 41.7021 36.6383 41.7021C37.4468 41.7021 37.4894 41.7872 36.9787 42.4255C36.6383 42.8085 36.4681 43.4894 36.5106 44C36.6383 44.7234 36.5532 44.766 36.0426 44.3404C35.7021 44.0425 35.1064 43.9149 34.7234 44.0851C34.2553 44.2553 34.0426 44.1277 34.0426 43.5319C34.0426 43.1064 33.8298 42.5106 33.5319 42.2128C33.1489 41.8298 33.234 41.7021 33.9574 41.7021C34.5106 41.7021 34.8936 41.4468 34.8936 41.0638C34.8936 40.7234 35.1064 40.4255 35.3191 40.4255C35.5745 40.4255 35.7447 40.7234 35.7447 41.0638ZM68.9787 41.7021C69.4043 41.7021 69.7872 41.8723 69.7872 42.1277C69.7872 42.3404 69.5745 42.5532 69.3191 42.5532C69.0213 42.5532 68.9362 42.9787 69.0213 43.617C69.1915 44.5106 69.1489 44.5957 68.4255 44.2128C67.8298 43.8723 67.4043 43.9149 66.9362 44.2979C66.383 44.766 66.3404 44.7234 66.4681 44C66.5106 43.4894 66.3404 42.8085 66 42.4255C65.4894 41.7872 65.5319 41.7021 66.2979 41.7021C66.766 41.7021 67.2766 41.3617 67.4468 40.9362C67.7872 40.2553 67.7872 40.2553 67.9574 40.9362C68.0851 41.3617 68.5106 41.7021 68.9787 41.7021ZM49.1915 47.7447L51.0638 49.0638V51.9574V54.8085L48.6808 56.5106L46.2979 58.2128L43.8298 57.1064C41.4043 56.0425 41.2766 55.9149 40.8511 53.9149C40.2553 50.9787 40.2553 50.8511 42 49.3617C43.234 48.2553 46.4255 46.4255 47.1489 46.383C47.234 46.383 48.1702 46.9787 49.1915 47.7447ZM57.9149 47.234C58.8511 47.7447 60.3404 48.766 61.234 49.5745L62.8511 51.0638L62.2979 53.4468C62 54.766 61.7021 55.8723 61.617 55.9574C61.5319 56.0425 60.4255 56.5532 59.1489 57.1489L56.8085 58.1702L54.383 56.4681L51.9149 54.766V51.9149V49.1064L53.7447 47.7872C54.7234 47.0638 55.7021 46.4255 55.8723 46.4255C56.0426 46.383 56.9787 46.766 57.9149 47.234ZM26 49.7872C26.8085 49.7872 27.234 50 27.234 50.4255C27.234 50.766 26.9787 51.0638 26.6808 51.0638C25.617 51.0638 22.1702 49.7447 21.6596 49.1064C21.234 48.5957 21.4468 48.5957 22.9787 49.1489C23.9574 49.4894 25.3191 49.7872 26 49.7872ZM81.4043 49.1489C80.3404 49.8723 77.234 51.0638 76.3404 51.0638C76 51.0638 75.7447 50.766 75.7447 50.4255C75.7447 50 76.2128 49.7872 77.1489 49.7447C77.8723 49.7447 79.1915 49.4894 80 49.1915C82.0426 48.383 82.4681 48.383 81.4043 49.1489ZM27.7872 53.0638C27.9574 53.1489 28.0851 53.4468 28.0851 53.7021C28.0851 54.2553 25.3191 53.8723 23.3617 52.9787C21.9149 52.3404 21.9574 52.3404 24.6809 52.5957C26.2128 52.766 27.5745 52.9787 27.7872 53.0638ZM79.7872 52.9787C79.0638 53.2766 77.7872 53.6596 76.8936 53.8298C75.617 54.0851 75.3191 54 75.3191 53.4894C75.3191 52.8511 76.5106 52.5957 80 52.4681C81.0213 52.4255 80.9787 52.4255 79.7872 52.9787ZM28.5106 56.1702C28.5106 56.6808 26.6383 56.6808 25.1064 56.1702C24.2553 55.9149 24.5106 55.8298 26.2979 55.7872C27.4894 55.7447 28.5106 55.9149 28.5106 56.1702ZM78.0851 56.1702C76.8936 56.6808 74.3404 56.6808 74.6809 56.1702C74.8085 55.9149 75.8298 55.7447 76.9362 55.7872C78.4255 55.7872 78.7234 55.9149 78.0851 56.1702ZM43.7872 57.7021C45.9149 58.6383 46.383 59.0213 46.5957 60.0851C46.766 60.766 46.8085 61.4042 46.7234 61.4894C46.6808 61.5745 44.6808 61.8298 42.3404 62.1277C40 62.383 37.9149 62.6808 37.6596 62.6808C37.4468 62.7234 37.1915 61.9149 37.1064 60.8511C36.9787 59.0213 37.0638 58.8936 38.8085 57.7872C39.8298 57.1915 40.766 56.6383 40.9362 56.6383C41.1064 56.5957 42.383 57.1064 43.7872 57.7021ZM64.0851 57.7021C65.9149 58.766 65.9574 58.8511 65.9574 60.9362C65.9574 62.7234 65.8723 63.0213 65.234 62.8085C64.8085 62.6808 62.6383 62.383 60.4255 62.0851C58.2128 61.8298 56.2979 61.5745 56.2128 61.4894C56.1702 61.4042 56.2553 60.8085 56.4681 60.1277C56.7234 59.2766 57.4894 58.5957 59.1915 57.7872C60.4255 57.1489 61.6596 56.6383 61.8298 56.6383C62.0426 56.5957 63.0213 57.1064 64.0851 57.7021ZM28.766 59.4468C28.4255 59.8298 24 60.1702 24.3404 59.7872C24.8085 59.2766 28.7234 58.4255 28.8936 58.8085C28.9362 59.0213 28.8936 59.3191 28.766 59.4468ZM77.1064 59.1915C78.5957 59.6596 78.766 59.7872 77.9149 59.9149C76.2128 60.1702 74.0426 59.617 74.0426 58.8511C74.0426 58.4681 74.2979 58.2979 74.6383 58.4255C74.9787 58.5532 76.0851 58.9362 77.1064 59.1915ZM29.7021 62.766C29.5745 62.8936 28.8085 63.1915 28.0426 63.4042L26.5957 63.7872L27.8723 62.766C28.6808 62.0851 29.2766 61.8723 29.5319 62.1277C29.7447 62.3404 29.8298 62.6383 29.7021 62.766ZM76.1702 63.617C76.1702 64.1702 73.7872 62.9787 73.6596 62.3404C73.5319 61.6596 73.6596 61.6596 74.8511 62.5106C75.5745 63.0213 76.1702 63.5319 76.1702 63.617ZM64.4681 63.5745C68.8085 64.2979 76.6809 66.2979 77.0638 66.7234C77.1915 66.8936 76.7234 69.4894 76.0426 72.4681C74.9787 76.9362 74.6383 77.8723 74.0851 77.6596C72.7234 77.1064 67.0213 75.7447 63.234 75.0213C58.4255 74.1702 45.9574 74.0425 41.0638 74.8085C39.1915 75.1489 35.8298 75.8298 33.5745 76.383C31.3191 76.9362 29.234 77.4468 28.8936 77.5319C28.5106 77.617 27.9574 76.2128 27.1489 72.9787C25.4043 66 25.0638 66.6808 31.4043 65.1489C36.2128 64 39.4894 63.4042 44.2553 62.8085C47.3191 62.4255 60.766 62.9362 64.4681 63.5745ZM26.5957 74C27.5745 78 27.8723 78.6808 28.8085 79.1064C29.4043 79.4042 29.7872 79.7447 29.617 79.8723C29.0638 80.4255 22.3404 82.8511 22.2128 82.5532C22.1702 82.383 22.6383 80.8085 23.3617 79.1064C24.0426 77.3617 24.5106 75.8298 24.383 75.617C24.2979 75.4468 23.0638 74.7234 21.7021 74.0425C20.3404 73.3617 19.1064 72.5957 18.9787 72.383C18.766 72.0851 23.4043 69.9149 25.3617 69.3617C25.4043 69.3617 25.9574 71.4468 26.5957 74ZM81.4043 70.8511C82.9787 71.4894 84.2553 72.1277 84.2553 72.2979C84.2553 72.4681 83.7447 72.8511 83.1064 73.1489C82.4255 73.4468 81.1064 74.1277 80.1277 74.7234L78.383 75.7447L79.7872 79.234C80.5532 81.1915 81.1489 82.8085 81.0638 82.8936C81.0213 82.9362 79.5319 82.4681 77.8298 81.7872C76.0851 81.1064 74.2979 80.4255 73.8298 80.2553C73.0213 79.9574 73.0638 79.9149 74.1277 79.3191C75.3191 78.6808 75.4894 78.2553 76.8511 72.5957C77.2766 70.7234 77.7872 69.4042 78.0426 69.5319C78.2979 69.617 79.7872 70.2128 81.4043 70.8511ZM49.1064 76.1702C51.1064 76.5532 52.1702 76.5532 54.8511 76.0425C56.8085 75.617 58.8511 75.4894 60 75.7021L61.9149 75.9574L59.5745 77.1064C54.2553 79.7021 46.8936 79.4894 42.5532 76.6808L41.4894 75.9574L42.9787 75.7021C44.6383 75.3617 45.5319 75.4468 49.1064 76.1702ZM37.0213 77.8298C37.0213 78.383 39.234 80.0851 44.2553 83.3617L51.4894 88.0425L58.5532 83.4894C63.7021 80.1702 65.7447 78.6383 66.0426 77.8298C66.3404 76.9787 66.6383 76.766 67.2766 76.8936C67.9574 77.1064 68.0426 77.3617 67.8298 78.6808C67.6596 79.5319 67.5319 80.2553 67.4894 80.2979C67.4468 80.3404 63.8298 82.6808 59.4894 85.4894L51.5745 90.5532L44.1702 85.8723C40.1277 83.3191 36.5106 80.8936 36.1277 80.5106C35.7447 80.0851 35.3191 79.1915 35.1915 78.4255C34.9787 77.3617 35.1064 77.0213 35.6596 76.8936C36.6383 76.6808 37.0213 76.9362 37.0213 77.8298ZM49.234 83.7021C49.1064 84.1277 49.0213 83.7872 49.0213 82.9787C49.0213 82.1702 49.1064 81.8298 49.234 82.2128C49.3191 82.6383 49.3191 83.3191 49.234 83.7021ZM52 82.383C51.617 82.6808 51.4043 83.0638 51.617 83.234C51.7872 83.4042 51.9149 83.3191 51.9149 83.0638C51.9149 82.383 52.6383 82.4255 52.8936 83.1064C53.0213 83.4894 52.7234 83.6596 51.9574 83.617C51.1489 83.617 50.8936 83.4042 50.9787 82.8511C51.0638 82.4681 50.8936 82.1277 50.6383 82.1277C50.4255 82.1277 50.2128 82.3404 50.2128 82.6383C50.2128 82.8936 50.0851 83.0213 49.9574 82.8511C49.4468 82.3404 50.2128 81.8298 51.4468 81.8298C52.5957 81.8298 52.6383 81.9149 52 82.383ZM54.3404 82.6383C54.2128 82.9787 54.0851 82.8511 54.0851 82.383C54.0426 81.9149 54.1702 81.6596 54.2979 81.8298C54.4255 81.9574 54.4681 82.3404 54.3404 82.6383Z"
        fill="black"
      />
      <path
        d="M45.5745 23.8298C42.4255 24.9787 39.8298 26 39.7872 26.0425C39.617 26.2128 42.8085 42.9362 43.0213 43.1489C43.1489 43.2766 44.4255 42.9787 45.9149 42.5532C49.4468 41.4468 53.5745 41.4468 57.234 42.5957C58.8085 43.0638 60.1277 43.4043 60.1702 43.3191C60.4255 42.9787 63.3617 26.2128 63.1915 26.0425C63.0213 25.8723 53.5745 22.4255 52.1277 22C51.617 21.8723 48.8511 22.6383 45.5745 23.8298ZM51.9149 25.1064C51.9149 25.5319 52.2553 26.0851 52.6809 26.3404C53.2766 26.6808 53.3192 26.8511 52.8936 27.2766C52.2979 27.8723 52.1277 29.8723 52.6383 30.3404C53.1915 30.8936 54.0426 29.7021 53.7872 28.6808C53.617 28.0851 53.7021 27.6596 53.9574 27.6596C54.2128 27.6596 54.5532 27.234 54.7234 26.6808C55.0213 25.7872 55.0638 25.8298 55.3192 27.0213C55.4468 27.7021 55.4043 28.5957 55.1489 28.9787C54.6809 29.7872 55.1064 31.234 55.7447 30.8511C55.9574 30.7234 56.1702 30.1277 56.1702 29.5319C56.1702 28.9787 56.3404 28.5106 56.5957 28.5106C56.8085 28.5106 57.4043 28.0851 57.9149 27.5319C59.0213 26.383 58.8936 26.766 57.234 29.6596C56.0851 31.7021 55.9149 31.8298 54.6809 31.5745C53.0213 31.1915 49.9574 31.1915 48.2553 31.5745C47.0213 31.8723 46.8511 31.7447 46.1277 30.1277C45.7021 29.1915 45.0638 28.1277 44.766 27.7872C44.4255 27.4468 44.2553 27.1064 44.383 26.9787C44.766 26.5957 46.7234 28.8511 46.8936 29.8298C47.0638 31.1915 48.0851 31.3617 48.0851 30.0425C48.0851 29.4894 47.8723 28.8511 47.6596 28.7234C47.4043 28.5532 47.3617 28.1702 47.617 27.7447C47.7872 27.3617 47.8723 26.7234 47.7447 26.383C47.6596 26.0425 47.9574 26.2128 48.4255 26.8085C48.8936 27.4468 49.3617 28.4255 49.4468 29.0638C49.617 30.4255 50.1702 30.7234 50.766 29.7447C51.0638 29.2766 51.0213 28.6808 50.5532 27.7447C50 26.6383 49.9574 26.383 50.4681 26.2128C50.8085 26.0851 51.0638 25.5745 51.0638 25.1064C51.0638 24.6383 51.2766 24.2553 51.4894 24.2553C51.7447 24.2553 51.9149 24.6383 51.9149 25.1064ZM55.4468 32.1702C55.8723 32.3404 56 32.7234 55.7872 33.4468C55.5319 34.5106 55.4043 34.5532 51.5745 34.5957C47.4043 34.6808 47.6596 34.8085 47.4894 32.6383C47.4043 31.6596 53.234 31.3191 55.4468 32.1702ZM52.9787 37.0213C53.1064 37.234 52.9362 37.8723 52.5957 38.383C51.9149 39.3191 51.9149 39.3191 51.9149 37.9574C51.9149 36.6383 52.4255 36.1702 52.9787 37.0213ZM48.8511 38.2553C49.1915 39.1915 49.1915 39.4894 48.8085 39.3191C48.5106 39.234 48.2553 38.6808 48.2553 38.0851C48.1702 36.6808 48.3404 36.7234 48.8511 38.2553ZM50.0851 37.9574C49.9574 38.2979 49.8298 38.1702 49.8298 37.7021C49.7872 37.234 49.9149 36.9787 50.0426 37.1489C50.1702 37.2766 50.2128 37.6596 50.0851 37.9574ZM51.4894 38.1702C51.4894 39.1064 51.4043 39.234 51.0638 38.7234C50.5106 37.8723 50.5106 37.0213 51.0638 37.0213C51.3192 37.0213 51.4894 37.5319 51.4894 38.1702ZM54.1277 38.0851C54.2553 38.6383 54.1702 39.0213 54 38.8936C53.617 38.6808 53.4468 37.0213 53.7872 37.0213C53.8723 37.0213 54.0426 37.4894 54.1277 38.0851ZM55.7447 37.1915C55.7447 37.2766 55.4468 37.4468 55.1064 37.617C54.766 37.7447 54.4681 37.6596 54.4681 37.4468C54.4681 37.1915 54.766 37.0213 55.1064 37.0213C55.4468 37.0213 55.7447 37.1064 55.7447 37.1915ZM47.617 39.3617C47.617 39.5745 47.4468 39.4894 47.234 39.1489C47.0213 38.8085 46.8511 38.2128 46.8511 37.8723C46.8511 37.1915 47.5745 38.5532 47.617 39.3617ZM57.4043 38.3404C57.4468 38 57.5319 37.8298 57.6596 37.9574C57.7872 38.0851 57.7021 38.6383 57.4894 39.1915C57.1915 39.9574 57.0638 40.0425 57.0638 39.4468C57.0213 39.0213 56.8511 38.8085 56.5957 38.9362C56.0851 39.234 56.0851 39.0638 56.4681 38.0425C56.7234 37.3617 56.766 37.3617 57.0638 38.1277C57.2766 38.5957 57.4043 38.6808 57.4043 38.3404ZM55.617 39.234C55.4894 39.5319 55.4043 39.3191 55.4043 38.7234C55.4043 38.1277 55.4894 37.9149 55.617 38.1702C55.7021 38.4681 55.7021 38.9787 55.617 39.234ZM59.4043 38.383C59.5745 38.6383 59.5319 38.7234 59.234 38.5532C59.0213 38.4255 58.6809 38.5532 58.5957 38.8085C58.4681 39.1489 58.3404 39.0638 58.3404 38.5957C58.2979 37.7872 58.9362 37.617 59.4043 38.383ZM45.8298 39.8723C45.1489 40.5532 44.2553 40.2979 44.2553 39.4468C44.2553 39.1064 44.383 39.1489 44.6383 39.5319C45.1064 40.2553 45.9574 39.7872 46 38.8085C46 38.2979 46.0851 38.2553 46.2553 38.6383C46.383 38.9787 46.1702 39.5319 45.8298 39.8723ZM58.8511 40.4681C58.5106 40.8085 58.2979 40.766 58.0851 40.383C57.8723 40.0425 57.9149 39.9574 58.2128 40.1702C58.5106 40.3404 58.7234 40.2553 58.7234 39.9574C58.7234 39.6596 58.8511 39.5745 59.0213 39.7021C59.1915 39.8723 59.1064 40.2128 58.8511 40.4681Z"
        fill="black"
      />
      <path
        d="M51.2766 32.8085C50.8511 33.4468 51.4043 33.8723 51.9574 33.3191C52.2553 33.0213 52.2553 32.766 52 32.5957C51.7447 32.4681 51.4043 32.5532 51.2766 32.8085Z"
        fill="black"
      />
      <path
        d="M47.1489 64.1277C45.7021 64.3404 45.4894 65.0213 45.8723 68.9362C46.1702 71.8723 46.2553 72.1277 47.3191 72.5106C48.9787 73.1064 50.6383 72.2553 50.6383 70.8511C50.6383 70.1702 50.383 69.7872 50 69.7872C49.6596 69.7872 49.3617 70.0851 49.3617 70.4255C49.3617 70.766 48.9787 71.0638 48.5106 71.0638C47.8723 71.0638 47.6596 70.766 47.6596 69.8723C47.6596 69.234 47.5319 68 47.4043 67.1064C47.1489 65.7021 47.234 65.5319 48.0426 65.5319C48.5532 65.5319 48.9362 65.7872 48.9362 66.1702C48.9362 66.5106 49.3191 66.8085 49.7872 66.8085C50.4255 66.8085 50.6383 66.5106 50.6383 65.7447C50.6383 64.8085 49.4894 63.7447 48.6383 63.8723C48.4681 63.9149 47.7872 64.0426 47.1489 64.1277Z"
        fill="black"
      />
      <path
        d="M53.1064 64.2979C52.4681 64.6383 52.3404 65.3617 52.3404 68.2979C52.3404 71.4042 52.4681 71.9574 53.1489 72.3404C55.1064 73.3617 57.0213 72.5957 57.0213 70.7659C57.0213 69.6596 55.9574 69.4042 55.5745 70.4255C55.4468 70.7659 55.0638 71.0638 54.6808 71.0638C54.1702 71.0638 54.0426 70.5106 54.0426 68.2979C54.0426 65.8298 54.1277 65.5319 54.8936 65.5319C55.3617 65.5319 55.7447 65.8298 55.7447 66.1702C55.7447 66.5106 56.1277 66.8085 56.5957 66.8085C57.234 66.8085 57.4468 66.5106 57.4468 65.7872C57.4468 65.1915 57.3191 64.6383 57.1489 64.5532C56.2979 64.0851 53.7447 63.9149 53.1064 64.2979Z"
        fill="black"
      />
      <path
        d="M58.9362 67.5319C58.8085 69.3617 58.5957 71.2766 58.4681 71.7872C58.3404 72.5957 58.5106 72.766 59.8723 72.9787C60.766 73.1064 61.8298 73.3191 62.2553 73.4043C62.7234 73.4894 62.9787 73.2766 62.9787 72.7234C62.9787 72.1277 62.6809 71.9149 61.7447 71.9149C60.2553 71.9149 59.9574 71.5745 60.2979 70.2979C60.4681 69.5745 60.7234 69.4468 61.7447 69.6596C62.7234 69.8298 62.9787 69.7447 62.9787 69.1915C62.9787 68.766 62.5106 68.383 61.7021 68.2128C60.4255 67.9574 60.1702 67.4894 60.8085 66.4681C61.0638 66.0851 61.617 66 62.7234 66.1702C63.9574 66.4255 64.2553 66.3404 64.2553 65.7872C64.2553 65.1489 63.8298 64.9787 60.766 64.4681L59.234 64.2128L58.9362 67.5319Z"
        fill="black"
      />
      <path
        d="M39.4468 65.2766C38.9362 65.7872 38.9362 66.4255 39.3191 69.0213C39.9149 72.8511 40.1277 73.1915 41.8298 73.1915C44.1702 73.1915 44.4681 72.7234 44.3404 69.5319C44.1277 65.3617 43.7872 64.6808 41.7447 64.6808C40.8085 64.6808 39.7872 64.9362 39.4468 65.2766ZM42.7234 68.5532C42.9787 71.2766 42.8511 71.9149 41.9574 71.9149C41.3617 71.9149 40.8511 69.7872 40.8511 67.3191C40.8511 66.2553 41.0213 65.9574 41.6596 65.9574C42.2979 65.9574 42.4681 66.4255 42.7234 68.5532Z"
        fill="black"
      />
      <path
        d="M34.1702 65.8298C32.7234 66.1277 32.2128 67.0213 32.5532 68.8936C32.8085 70.5106 32.8936 70.5957 34.5957 70.7234C36.0851 70.8085 36.4255 71.0213 36.5106 71.7872C36.6383 72.8085 35.617 73.1915 35.1064 72.3404C34.6383 71.617 33.617 71.8723 33.617 72.7234C33.617 74.1702 34.7234 74.6383 36.5957 74.0851C38.383 73.5745 38.5532 73.234 38.0426 70.6809C37.7872 69.4894 37.617 69.3617 36.1702 69.3617C35.1064 69.3617 34.4681 69.1489 34.2979 68.6809C33.8723 67.5745 34 67.234 34.8936 67.234C35.4043 67.234 35.7447 67.5319 35.7447 67.9149C35.7447 68.383 35.9574 68.5106 36.4255 68.3404C36.8085 68.2128 37.1915 68.0851 37.2766 68.0851C37.6596 68.0851 37.4043 66.5106 36.9362 66.0426C36.4255 65.5319 35.9149 65.4894 34.1702 65.8298Z"
        fill="black"
      />
      <path
        d="M65.7872 66C65.6596 66.3404 65.3191 68.1702 64.9787 70.0851C64.4681 73.1064 64.4681 73.617 64.9787 73.7872C65.8723 74.1277 65.8298 74.1702 66.1277 72.766C66.4255 71.0638 67.0638 71.1489 67.4043 72.9362C67.7872 75.0213 68.9362 75.3191 68.9362 73.3617C68.9362 72.5532 69.1915 71.5745 69.5319 71.234C70.4681 70.3404 70.8511 67.2766 70.1702 66.5532C69.2766 65.7021 66 65.2766 65.7872 66ZM68.9362 67.7447C68.9362 68.9787 68.383 70.2128 67.8298 70.2128C67.0213 70.2128 66.766 69.5319 67.0638 68.2979C67.3191 67.1915 68.9362 66.7234 68.9362 67.7447Z"
        fill="black"
      />
    </svg>
  )
}

export const BallLogoDefault: React.FC<IlogoDefault> = ({ tailwind }) => {
  return (
    <svg
      className={`${tailwind} fil`}
      width="107"
      height="100"
      viewBox="0 0 107 100"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.0957 11.6699C18.0469 12.4609 13.9453 15.8887 12.3242 20.6543C11.8555 22.041 11.709 22.8809 11.6504 24.5117C11.5918 26.2402 11.6992 27.1973 12.1191 28.6816C12.7246 30.8301 13.8477 32.7832 15.4102 34.3945C17.4316 36.4844 20.0391 37.832 23.0273 38.3398C24.1699 38.5352 26.709 38.4766 27.832 38.2324C29.4629 37.8711 31.25 37.1191 32.6465 36.1914C34.6094 34.8926 36.5918 32.4902 37.4805 30.3418C40.918 22.0996 35.8106 12.9883 27.0313 11.6699C25.8984 11.4941 24.1797 11.4941 23.0957 11.6699ZM22.3438 15.0293L24.5117 16.25L24.4922 18.1543L24.4629 20.0586L22.5586 21.4551C21.5137 22.2168 20.5859 22.8418 20.5078 22.8418C20.4297 22.8418 19.5898 22.5879 18.6523 22.2852L16.9434 21.7188L16.4355 19.2383L15.9277 16.748L16.4844 16.2207C17.3145 15.4395 18.3105 14.7168 19.2383 14.2188C19.6973 13.9746 20.0977 13.7793 20.127 13.7988C20.1563 13.8086 21.1523 14.3652 22.3438 15.0293ZM30.8594 14.1699C31.8652 14.7168 32.9492 15.5176 33.6328 16.2012L34.209 16.7773L33.7207 19.2383L33.2324 21.6895L31.4844 22.2754C30.2441 22.6855 29.6777 22.8418 29.5313 22.7832C29.4141 22.7441 28.5059 22.1094 27.5 21.3867L25.6836 20.0684V18.1445V16.2305L27.8613 15.0098C29.0527 14.3359 30.0488 13.7793 30.0781 13.7793C30.1074 13.7695 30.459 13.9551 30.8594 14.1699ZM18.3008 23.418L20.0488 23.9746L20.5762 25.5371C20.8594 26.3965 21.2012 27.4414 21.3281 27.8516L21.5625 28.6133L20.4395 30.0781C19.5996 31.1719 19.2578 31.543 19.1016 31.543C18.9844 31.543 17.8613 31.3867 16.6016 31.2012C14.8828 30.9473 14.2773 30.8203 14.1895 30.6934C13.7793 30.1465 13.0371 27.8418 12.9297 26.8066L12.8711 26.2207L14.7168 24.541C15.7227 23.6133 16.5527 22.8516 16.5527 22.8516C16.5527 22.8516 17.3438 23.1055 18.3008 23.418ZM35.4395 24.5313C36.4356 25.4492 37.2656 26.2695 37.2852 26.3379C37.3438 26.5527 37.0215 28.0859 36.7481 28.877C36.5527 29.4629 36.0254 30.6836 35.8984 30.8301C35.8398 30.8984 31.0352 31.5625 30.918 31.5137C30.8496 31.4844 30.293 30.8105 29.6875 30.0293L28.584 28.5938L29.3555 26.2891L30.127 23.9844L31.7871 23.4277C32.7051 23.1152 33.4863 22.8613 33.5352 22.8613C33.5742 22.8516 34.4336 23.6035 35.4395 24.5313ZM28.8574 30.918C29.4531 31.6992 29.9219 32.3828 29.9023 32.4512C29.8828 32.5195 29.4531 33.5645 28.9355 34.7754L27.998 36.9824L27.1582 37.1191C26.1035 37.2852 23.7109 37.2754 22.8223 37.0996L22.1582 36.9629L21.1816 34.6777C20.6543 33.4277 20.2441 32.3535 20.2832 32.2852C20.3223 32.2266 20.8105 31.5723 21.3672 30.8301L22.3926 29.4922H25.0879L27.7832 29.502L28.8574 30.918Z" />
    </svg>
  )
}
