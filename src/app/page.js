import Image from "next/image";


export default function Home() {
  return (<div className={`home-page`}>
    <Image
       className=""
       src="/banner-ariz-2-1024x542.jpg"
       alt="Banner Ariz"
       width={1024}
       height={542}
       priority
     />
     </div>
  );
}
