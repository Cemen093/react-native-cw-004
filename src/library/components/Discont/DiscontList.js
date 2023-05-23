import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Discount = ({ discount }) => {
  return (
      <View style={styles.card}>
          <View style={styles.topContainer}>
            <View style={styles.topLeftContainer}>
              <Image source={discount.image} style={styles.image} />
            </View>

            <View style={styles.topRightContainer}>
              <Text style={styles.discountValue}>{discount.value}%</Text>
              <Text style={styles.discountLimit}>{discount.limit}</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomLeftContainer}>
              <Text style={styles.activeText}>{discount.isActive ? 'Active' : 'Inactive'}</Text>
            </View>
            <View style={styles.bottomRightContainer}>
              <Text style={styles.expirationDate}>{discount.expirationDate}</Text>
            </View>
          </View>
      </View>
  );
};

const DiscountList = ({ discounts }) => {
  return (
      <View style={styles.container}>
        {discounts.map(discount => (
            <Discount key={discount.id} discount={discount} />
        ))}
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    flexDirection: 'column',
    height: 120,
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 15,
    marginBottom: 16,
  },
  topContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  topLeftContainer: {
    flex: 1,
    alignItems: "center",
  },
  topRightContainer: {
    flex: 3,
    alignItems: "center",
    flexDirection: "column",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  bottomLeftContainer: {
    flex: 2,
    alignItems: "center",
  },
  bottomRightContainer: {
    flex: 3,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  discountValue: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  discountLimit: {
    fontSize: 14,
    marginTop: 8,
  },
  activeText: {
    fontWeight: 'bold',
  },
  expirationDate: {
    fontSize: 14,
    textAlign: 'right',
  },
});

export { DiscountList };