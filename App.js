import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {RGrid, RView} from 'react-native-rbg';


export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <RGrid>
                    <ScrollView>
                        <Text style={styles.sampleHeader}>Grid Columns</Text>
                        <RView classes="container">
                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>Equal-width</Text>

                                <RView classes="row">
                                    <RView classes="col" style={styles.box}>
                                        <Text>1 of 2</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>2 of 2</Text>
                                    </RView>
                                </RView>
                                <RView classes="row">
                                    <RView classes="col" style={styles.box}>
                                        <Text>1 of 3</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>2 of 3</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>3 of 3</Text>
                                    </RView>
                                </RView>
                            </View>

                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>Setting one column width</Text>

                                <RView classes="row">
                                    <RView classes="col" style={styles.box}>
                                        <Text>1 of 3</Text>
                                    </RView>
                                    <RView classes="col-6" style={styles.box}>
                                        <Text>2 of 3 (wider)</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>3 of 3</Text>
                                    </RView>
                                </RView>
                                <RView classes="row">
                                    <RView classes="col" style={styles.box}>
                                        <Text>1 of 3</Text>
                                    </RView>
                                    <RView classes="col-5" style={styles.box}>
                                        <Text>2 of 3 (wider)</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>3 of 3</Text>
                                    </RView>
                                </RView>
                            </View>

                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>Variable width content</Text>

                                <RView classes="row">
                                    <RView classes="col col-lg-2" style={styles.box}>
                                        <Text>1 of 3</Text>
                                    </RView>
                                    <RView classes="col-md-auto" style={styles.box}>
                                        <Text>Variable width content</Text>
                                    </RView>
                                    <RView classes="col col-lg-2" style={styles.box}>
                                        <Text>3 of 3</Text>
                                    </RView>
                                </RView>
                                <RView classes="row">
                                    <RView classes="col" style={styles.box}>
                                        <Text>1 of 3</Text>
                                    </RView>
                                    <RView classes="col-md-auto" style={styles.box}>
                                        <Text>Variable width content</Text>
                                    </RView>
                                    <RView classes="col col-lg-2" style={styles.box}>
                                        <Text>3 of 3</Text>
                                    </RView>
                                </RView>
                            </View>

                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>All breakpoints</Text>

                                <RView classes="row">
                                    <RView classes="col" style={styles.box}>
                                        <Text>col</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>col</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>col</Text>
                                    </RView>
                                    <RView classes="col" style={styles.box}>
                                        <Text>col</Text>
                                    </RView>
                                </RView>
                                <RView classes="row">
                                    <RView classes="col-8" style={styles.box}>
                                        <Text>col-8</Text>
                                    </RView>
                                    <RView classes="col-4" style={styles.box}>
                                        <Text>col-4</Text>
                                    </RView>
                                </RView>
                            </View>

                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>Stacked to horizontal</Text>

                                <RView classes="row">
                                    <RView classes="col-sm-8" style={styles.box}>
                                        <Text>col-sm-8</Text>
                                    </RView>
                                    <RView classes="col-sm-4" style={styles.box}>
                                        <Text>col-sm-4</Text>
                                    </RView>
                                </RView>
                                <RView classes="row">
                                    <RView classes="col-sm" style={styles.box}>
                                        <Text>col-sm</Text>
                                    </RView>
                                    <RView classes="col-sm" style={styles.box}>
                                        <Text>col-sm</Text>
                                    </RView>
                                    <RView classes="col-sm" style={styles.box}>
                                        <Text>col-sm</Text>
                                    </RView>
                                </RView>
                            </View>

                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>Mix and match</Text>

                                {/*Stack the columns on mobile by making one full-width and the other half-width*/}
                                <RView classes="row">
                                    <RView classes="col-md-8" style={styles.box}>
                                        <Text>col-md-8</Text>
                                    </RView>
                                    <RView classes="col-6 col-md-4" style={styles.box}>
                                        <Text>col-6 col-md-4</Text>
                                    </RView>
                                </RView>

                                {/*Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop*/}
                                <RView classes="row">
                                    <RView classes="col-6 col-md-4" style={styles.box}>
                                        <Text>.col-6 .col-md-4</Text>
                                    </RView>
                                    <RView classes="col-6 col-md-4" style={styles.box}>
                                        <Text>.col-6 .col-md-4</Text>
                                    </RView>
                                    <RView classes="col-6 col-md-4" style={styles.box}>
                                        <Text>.col-6 .col-md-4</Text>
                                    </RView>
                                </RView>

                                {/*Columns are always 50% wide, on mobile and desktop*/}
                                <RView classes="row">
                                    <RView classes="col-6" style={styles.box}>
                                        <Text>.col-6</Text>
                                    </RView>
                                    <RView classes="col-6" style={styles.box}>
                                        <Text>.col-6</Text>
                                    </RView>
                                </RView>
                            </View>

                            <View style={styles.sample}>
                                <Text style={styles.sampleHeader}>Nesting</Text>

                                <RView classes="row">
                                    <RView classes="col-sm-3" style={styles.box}>
                                        <Text>Level 1: .col-sm-3</Text>
                                    </RView>
                                    <RView classes="col-sm-9" style={styles.box}>
                                        <RView classes="row">
                                            <RView classes="col-8 col-sm-6" style={styles.box}>
                                                <Text>Level 2: .col-8 .col-sm-6</Text>
                                            </RView>
                                            <RView classes="col-4 col-sm-6" style={styles.box}>
                                                <Text>Level 2: .col-4 .col-sm-6</Text>
                                            </RView>
                                        </RView>
                                    </RView>
                                </RView>
                            </View>
                        </RView>

                        <View style={styles.sample}>
                            <Text style={styles.sampleHeader}>Containers</Text>

                            <RView classes="container" style={styles.box}>
                                <Text>100% wide only on xs breakpoint</Text>
                            </RView>
                            <RView classes="container-sm" style={styles.box}>
                                <Text>100% wide until sm breakpoint</Text>
                            </RView>
                            <RView classes="container-md" style={styles.box}>
                                <Text>100% wide until md breakpoint</Text>
                            </RView>
                            <RView classes="container-lg" style={styles.box}>
                                <Text>100% wide until lg breakpoint</Text>
                            </RView>
                            <RView classes="container-xl" style={styles.box}>
                                <Text>100% wide until xl breakpoint</Text>
                            </RView>
                            <RView classes="container-xxl" style={styles.box}>
                                <Text>100% wide until xxl breakpoint</Text>
                            </RView>
                            <RView classes="container-fluid" style={styles.box}>
                                <Text>100% on every breakpoint</Text>
                            </RView>
                        </View>
                    </ScrollView>
                </RGrid>
            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#27292b08",
        borderWidth: 1,
        borderColor: "#27292b1a",
        paddingTop: 12,
        paddingBottom: 12
    },
    sample: {
        marginBottom: 24
    },
    sampleHeader: {
        fontSize: 24,
        paddingTop: 6,
        paddingBottom: 6,
    }
});
