package rpg;
import java.util.Random;


public class Cleric {
	String name;
	int hp = 50;
	final int Max_hp = 50;
	int mp = 10;
	final int Max_mp = 10;

	public void selfAid() {
		this.hp= Max_hp;
		this.mp-=5;
		System.out.println("HPが最大まで回復した");
	}

	public int pray(int sec) {
		int recover =  new Random().nextInt(3)+sec;
		int recoverActual = Math.min(this.Max_mp-this.mp, recover);
		this.mp += recoverActual;
		System.out.println("MPが"+recoverActual+"回復した");
		return recoverActual;
	}
}
