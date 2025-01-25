#include <iostream>

double calculateDiscount(double price, double discountPercent) {
    return price - (price * discountPercent / 100);
}
