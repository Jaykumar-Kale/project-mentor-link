import jakarta.persistence.*;

@Entity
public class Mentee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    
    // Default constructor
    public Mentee() {}

    // Constructor with ID
    public Mentee(Long id) {
        this.id = id;
    }
}
