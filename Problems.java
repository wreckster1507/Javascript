import java.util.Scanner;

public class Problems {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int x = scanner.nextInt();

        if (x % 2 == 0 && x % 3 == 0) {
            System.out.println("divisible by 2 and 3");
        }

        System.out.print("Enter a number 1: ");
        int a = scanner.nextInt();
        System.out.print("Enter a number 2: ");
        int b = scanner.nextInt();
        System.out.print("Enter a number 3: ");
        int c = scanner.nextInt();

        if (a > b && a > c) {
            System.out.println("a is greater");
        } else if (b > a && b > c) {
            System.out.println("b is greater");
        } else {
            System.out.println("c is greater");
        }

        System.out.print("Enter total working days: ");
        int totalWorkingDays = scanner.nextInt();
        System.out.print("Enter total absent days: ");
        int totalAbsentDays = scanner.nextInt();

        double totalPresentDays = totalWorkingDays - totalAbsentDays;

        double percentage = ((double) totalPresentDays / totalWorkingDays) * 100;

        if (percentage < 75) {
            System.out.println("You are not eligible for the exam");
        }

        System.out.println("Enter Salary");
        int salary = scanner.nextInt();

        System.out.println("Enter years of experience");
        int years = scanner.nextInt();

        if (years <= 5) {
            double bonus = (5 / 100) * salary;
        } else {

        }

        scanner.close();
    }
}
