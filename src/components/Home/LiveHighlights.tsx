import { games } from "../common/Layout/Sidebar";
import { TeamOddsCard } from "../common/TeamOddsCard";
import { Event, EventType } from "@/graphql/generated/schema";
interface LiveHighlightsProp {
    eventType: EventType;
    event: Event[] | any;
}
export const LiveHighlights = ({ event, eventType }: LiveHighlightsProp) => {
    const findIcon = (activeGame: string) => {
        const data = games.find(item => item.name === activeGame);
        return data?.icon;
    };

    return (
        <div className="bg-header p-2 rounded-lg">
            <div className="border-b p-2">
                <span className="flex items-center gap-2">
                    <span>{eventType?.name && findIcon(eventType.name)}</span>
                    <h4 className="text-primary font-semibold">
                        {eventType?.name}
                    </h4>
                </span>
            </div>
            {event?.map((item: Event) => (
                <TeamOddsCard event={item} key={item.id} />
            ))}
        </div>
    );
};
