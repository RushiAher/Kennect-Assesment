// program to find nth Fibonacci number using Recursion
#include <iostream>

using namespace std;
 
int fib(int n)
{
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}
 
int main()
{
    int n;
    cout << "Enter a number:";
    cin >> n;
    cout << n << "th Fibonacci Number: " << fib(n);
    return 0;
}