# // Reverse the array using temorary array
arr = [1, 2, 3, 4, 5]

n = len(arr)
tem=[0]*n
for i in range(n):
    tem[i]=arr[n-1-i]
for i in range(n):
    arr[i]=tem[i]
if __name__ == "__main__":
    print("Reversed array is:", arr)
    