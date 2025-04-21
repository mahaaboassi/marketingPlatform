
import Banner from "@/component/banner/page"
import Style from "./page.module.css"
import { generateYearCalendar } from "../functionality/calendar"
import Card from "./card";


export async function getStaticProps() {
    const fullYear = generateYearCalendar("2024");
    return {
        props: {
            fullYear
        }
    };
} 

const Calendar = ({fullYear})=>{
    // const fullYear = generateYearCalendar("2024")
    return(<div className={`${Style.container}`}>
    
        <Banner/>
        <div className={`flex flex-wrap justify-center mt-10`}>
            {fullYear.months.map((e)=><div className={`p-3 `}>
                <Card currentMonth={e}/>
            </div>)}

        </div>
        </div>)
}


export default Calendar