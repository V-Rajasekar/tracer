import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.util.Scanner;

public class PatternProblems {
  
    File outputFile = new File("2026\\CompetitiveProgramming\\DSA-solve-problems\\output.txt");
   
    private static void printStar(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print("* ");
                writeToFile("* ");
            }
            System.out.println();
            writeToFile("\n");
        }
    }

    private static void printColumnStars(int n) {
        for (int i = 0; i <= n; i++) {
           for (int j=0; j <=i; j++) {
             System.out.print("*");
             writeToFile("*");
           }
            System.out.println("*");
            writeToFile("*\n");
        }
    }

  
    public static void main(String[] args) {
    // Code to solve pattern problems will go here
      //Read the input from a input.txt file. The input can be 2, 3, 5 in new lines.
        try (Scanner sc = new Scanner(new File("2026\\CompetitiveProgramming\\DSA-solve-problems\\input.txt"))) {
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                int n = Integer.parseInt(line);
                writeToFile("printStar \n");
                printStar(n); 
                writeToFile("printColumnStar \n");
                printColumnStars(n); 
            }   
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

    }

    private static void writeToFile(String content) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("2026\\CompetitiveProgramming\\DSA-solve-problems\\output.txt", true))) {
            writer.write(content);
        } catch (Exception e) {
            e.printStackTrace();
        }   
    }   
}   

