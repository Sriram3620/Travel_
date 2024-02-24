import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./AdventureSection.css"
const quotes=[
    {
      img:"https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/blog-masonry-post-1.jpg",
      des:"Beauty Of Adventure on your Hand!Make use of it!!",
      Quotes:" THE DANGER OF ADVENTURE IS WORTH A THOUSAND DAYS OF EASE AND COMFORT ",
      order1:"0",
      order2:"1",
    },
    {
        img:"https://getwallpapers.com/wallpaper/full/b/9/3/1222498-top-adventure-wallpapers-2739x1829-for-full-hd.jpg",
        des:"Our Folks Will Make your Trip more Comfortable!!!",
        Quotes:" THEN ONE DAY, WHEN YOU LEAST EXPECT IT, THE GREAT ADVENTURE FINDS YOU!!",
        order1:"1",
        order2:"0",
    },
    {
        img:"https://www.pixelstalk.net/wp-content/uploads/2016/09/Adventure-HD-Wallpaper.jpg",
        des:"The Days will not get back So Open Your Eyes And Click the Book Button!!",
        Quotes:"THE VERY BASIC CORE OF A MAN’S LIVING SPIRIT IS HIS PASSION FOR ADVENTURE",
        order1:" ",
        order2:"",
    },
   
    
];

export default function AdventureQuotes()
{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="ama-head-con">
            <span className="hrline mt-4">|</span>
                <h1 className="Amazing-head"> <span className="amazing-head-span">Why Adventure </span> is So
                <br/> <span className="amazing-head-span">Special</span> For the people</h1>
                </div>
                <div className='d-flex flex-wrap'>

           {   quotes.map((content)=>
           {
            return(
                <div className='d-flex col-12 col-md-4 flex-column mt-5 '>

                <div className={"mt-3 order-md-"+content.order1 }>
                    <Card className='w-100'>
                        <Card.Img className='Adventure-card-img' variant="top" src={content.img} />
                        <Card.Body>
                            <Card.Title className='Adventure-card-des'>{content.des}</Card.Title>
                        </Card.Body>
                    </Card>
              </div>

              <div className='mb-3 mt-3'>
                <Card className='w-100'>
                    <Card.Body>
                    <Card.Title><i class="fas fa-quote-left"></i></Card.Title>
                    <Card.Text>
                    {content.Quotes}
                    </Card.Text>
                    <i class="fas fa-quote-right"></i>
                </Card.Body>
                </Card>
                    </div>
                </div>
            )
           })        
           }
 
                    </div>   
            </div>
        </div>
        </>
    )
}