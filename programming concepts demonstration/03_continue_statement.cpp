// program to calculate positive numbers till 100 only if the user enters a negative number, that number is skipped from the calculation


#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    int number = 0;

    while (number >= 0) {
        sum += number;
        cout << "Enter a number: ";
        cin >> number;

        if (number > 100) {
            cout << "The number is greater than 100 and won't be calculated." << endl;
            number = 0;
            continue;
        }
    }
    cout << "The sum is " << sum << endl;

    return 0;
}