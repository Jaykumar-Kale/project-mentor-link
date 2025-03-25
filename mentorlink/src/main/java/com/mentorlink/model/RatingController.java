
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private MentorRepository mentorRepository;

    @PostMapping("/add")
public ResponseEntity<String> addRating(
    @RequestParam Long menteeId,
    @RequestParam Long mentorId,
    @RequestParam int stars) {

    if (stars < 1 || stars > 5) {
        return ResponseEntity.badRequest().body("Rating should be between 1 and 5.");
    }

    Optional<Mentor> mentorOpt = mentorRepository.findById(mentorId);
    if (!mentorOpt.isPresent()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mentor not found.");
    }

    Mentor mentor = mentorOpt.get();
    Rating rating = new Rating();
    rating.setMentee(new Mentee(menteeId)); // Use constructor to set mentee
    rating.setMentor(mentor);
    rating.setStars(stars);

    ratingRepository.save(rating);
    return ResponseEntity.ok("Rating submitted successfully.");
}

}
