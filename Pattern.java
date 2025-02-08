class Pattern {

    static void pattern1(int N){
        for(int i=0;i<N;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    static void pattern2(int N){
        for(int i=0;i<N;i++){
            for(int j=0;j<N-i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    

    static void pattern3(int N){
        for(int i=0;i<N;i++){
            for(int j=0;j<N-i;j++){
                System.out.print(j);
            }
            System.out.println();
        }
    }

    static void pattern4(int N){
        for(int i=0; i<N; i++){
            for(int j=N-i-1; j>=0; j--){
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        pattern1(5);
        pattern2(5);
        pattern3(5);
        pattern4(0);
    }   
}