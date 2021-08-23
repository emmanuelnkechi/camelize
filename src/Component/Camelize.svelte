<script>
        export let word;
        let answer = function toCamelCase(str = word) {
        return str
          .split(" ")
          .map(function (word, index) {
            if (index == 0) {
              return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join("");
        }()
</script>

<p>{answer}</p>

