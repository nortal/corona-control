import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import { getSampleData } from '../helpers/elastic';

const ElasticSandbox = () => {
    const [hits, setHits] = useState([]);

    const successCallback = (response: any) => {
        setHits(response.data.hits.hits);
    };

    useEffect(() => {
        getSampleData({ successCallback });
    }, []);

    return hits && hits !== null  ? (
        <Box>
            <h1>Index: {process.env.REACT_APP_ES_INDEX}</h1>
            <List>
            {hits.map(hit => {
                return (
                    <ListItem key={hit['_id']}>
                        <ListItemText primary={hit['_source']['Name']} />
                    </ListItem>
                );
            })}
            </List>
        </Box>
    ) : null;
}

export default ElasticSandbox;