import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { SearchBarType } from '../types/SearchBarType';

const SearchBarComponent: FC<SearchBarType> = ({
    term,
    onTermChange,
    onTermSubmit,
}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={(newTerm: string) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: 'rgb(217, 215, 212)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 5,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
});

export default SearchBarComponent;
