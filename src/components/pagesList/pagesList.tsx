import React from "react";
import { Typography } from "@material-ui/core";
import CardList from "../card-list/CardList";

export default ({viewPageInfo, filteredPages, keyProp}: any) => {
    return (
        <>
            <CardList
                onClick={viewPageInfo}
                items={filteredPages}
                keyProp={keyProp}
                render={(item: any) => {
                    return (
                        <div key={item}>
                            <Typography color="textSecondary" gutterBottom>
                                {item.title}
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                <span>{item.sectionName}</span>
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                Last revisited:
                     
                                {item.sessions.length > 0 ? item.sessions.map(({ daysDiffFromToday, startDate, startTime }: any, index: number) => {
                                    return (<span key={`${startDate}*${startTime}`}> {daysDiffFromToday}{index !== item.sessions.length - 1 ? ', ' : ' days ago'}</span>)
                                }) : ' Never'}
                            </Typography>
                        </div>
                    );
                }}>
            </CardList>
        </>
    );
};