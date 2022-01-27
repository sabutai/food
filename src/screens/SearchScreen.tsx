import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchScreenType } from '../types/SearchScreenType';

import SearchBarComponent from '../components/SearchBarComponent';

const SearchScreen: FC<SearchScreenType> = () => {
    const [term, setTerm] = useState<string>('');

    return (
        <View>
            <Text>Search Screen</Text>
            <SearchBarComponent
                term={term}
                onTermChange={(newTerm: string) => setTerm(newTerm)}
                onTermSubmit={() => {}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
