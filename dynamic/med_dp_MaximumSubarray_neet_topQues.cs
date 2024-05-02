using System;
using System.Collections.Generic;

public class MaxSubArrAndSum_On
{
    public int MaxSum { get; set; }
    public int Start { get; set; }
    public int End { get; set; }
    public List<int> MaxSubArr { get; set; }
}

public class Program
{
    public static MaxSubArrAndSum_On MaxSubArrAndSum_On(int[] nums) void
    {
        int maxSum = nums[0];
        int currSum = nums[0];
        int start = 0;
        int end = 0;
        int temp = 0;

        for (int i = 1; i < nums.Length; i++)
        {
            if (nums[i] > currSum)
            {
                currSum = nums[i];
                temp = i;
            }
            else
            {
                currSum += nums[i];
            }

            if (currSum > maxSum)
            {
                maxSum = currSum;
                start = temp;
                end = i;
            }
        }

        return new MaxSubArrAndSum_On
        {
            MaxSum = maxSum,
            Start = start,
            End = end,
            MaxSubArr = new List<int>(new ArraySegment<int>(nums, start, end - start + 1))
        };
    }

    public static void Main()
    {
        int[] test1 = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
        int[] test2 = {1}
        int[] test3 = {5, 4, -1, 7, 8}
        int[] test4 = {-2, -3, 4, -1, -2, 1, 5, -3};
        MaxSubArrAndSum_On result = MaxSubArrAndSum_On(test1);

        Console.WriteLine("Max Sum: " + result.MaxSum);
        Console.WriteLine("Start Index: " + result.Start);
        Console.WriteLine("End Index: " + result.End);
        Console.Write("Max Subarray: ");
        foreach (int num in result.MaxSubArr)
        {
            Console.Write(num + " ");
        }
    }
}