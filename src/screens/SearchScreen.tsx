import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchScreenType } from '../types/SearchScreenType';

import SearchBarComponent from '../components/SearchBarComponent';
import yelp from '../api/yelp';

const SearchScreen: FC<SearchScreenType> = () => {
    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState<Object[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const searchApi = async (searchTerm: string): Promise<void> => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                },
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => searchApi('pasta'), []);

    return (
        <View>
            <Text>Search Screen</Text>
            <SearchBarComponent
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>
                {!!errorMessage ? errorMessage : `${results.length} results`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
