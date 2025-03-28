export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="850 520 220 40"
      className={`w-auto ${className}`}
      aria-label="Ivan Egoh Logo"
    >
      <path d="M860,551.97v-23.97h4.34v23.97h-4.34Z" />
      <path d="M891.16,528l-2.22,4.28-10.17,19.69-10.17-19.69-2.22-4.28h4.86l2.22,4.28,5.31,10.27,5.31-10.27,2.22-4.28h4.86Z" />
      <path d="M909.24,551.97h-4.86l-2.22-4.28-5.31-10.27-5.31,10.27-2.22,4.28h-4.86l2.22-4.28,10.17-19.69,10.17,19.69,2.22,4.28Z" />
      <path d="M935.62,528.03v23.97l-4.34-3.29-15.62-11.88v15.17h-4.34v-23.9l4.34,3.29,15.62,11.88v-15.27l4.34.03Z" />
      <path d="M960.33,534.47v2.23h15.62v4.28h-15.62v4.52c0,1.2,1.01,2.19,2.22,2.19h17.73v4.28h-17.73c-3.61,0-6.52-2.91-6.52-6.47v-11.02c0-3.56,2.91-6.47,6.52-6.47h17.73v4.28h-17.73c-1.21,0-2.22,.99-2.22,2.19Z" />
      <path d="M986.18,539.98c0,4.25,3.51,7.7,7.81,7.7h7.81v-4.59h-7.81v-4.28h12.15v13.15h-12.15c-6.7,0-12.15-5.38-12.15-11.98s5.45-11.98,12.15-11.98h12.15v4.28h-12.15c-4.3,0-7.81,3.46-7.81,7.7Z" />
      <path d="M1033.07,539.98c0,6.61-5.45,11.98-12.15,11.98s-12.15-5.38-12.15-11.98,5.45-11.98,12.15-11.98,12.15,5.38,12.15,11.98ZM1028.73,539.98c0-4.25-3.5-7.7-7.81-7.7s-7.81,3.46-7.81,7.7,3.51,7.7,7.81,7.7,7.81-3.46,7.81-7.7Z" />
      <path d="M1060,528v23.97h-4.34v-10.99h-15.62v10.99h-4.34v-23.97h4.34v8.7h15.62v-8.7h4.34Z" />
    </svg>
  )
}

