import '../../css/components/upcoming-releases.css';
import { soonCinema } from "../../helpers/soonCinema";
import ReleaseItem from "./release-items/ReleaseItem";

export default function UpcomingReleases()
{
    return (
        <div className="upcoming-releases">
            <h2 className="upcoming-releases__title">Скоро в кино</h2>

            <div className="releases">
                <ul className="releases__list">
                    {soonCinema?.map((item) => {
                        if(item.id <= 5) {
                            return (
                                <ReleaseItem
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    date={item.date}
                                />
                            );
                        }
                        return null; 
                        })
                    }
                </ul>
                <ul className="releases__list">
                    {soonCinema.map((item) => {
                        if(item.id >= 6) {
                            return (
                                <ReleaseItem
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    date={item.date}
                                />
                            );
                        }
                        return null; 
                        })
                    }
                </ul>
            </div>
            
        </div> 
    );
}