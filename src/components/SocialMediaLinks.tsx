
type props={
    src:string,
    url:string
}

export default function SocialMediaLinks({src,url}:props) {
  return (
    <a 
        href={url}
        target='_blank'
        >
        <div className="h-7 w-7">
            <img src={src} alt="" />
        </div>       
    </a>
  )
}
