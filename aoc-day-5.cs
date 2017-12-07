// still need to unpack this one.

int[] Parse(string input) => ReadAllLines("input").Select(int.Parse).ToArray();

int maxMoves(int[] instr, Func<int, int> updater)  {
    int i = 0, count = 0;
    while (i >= 0 && i < instr.Length) {
        count++;
        var j = instr[i];            
        instr[i] = updater(instr[i]);
        i += j;
    }
    return count;
}

maxMoves(Parse("input"), i => i+1).PrintDump();
maxMoves(Parse("input"), i => i + (i > 2 ? -1 : 1)).PrintDump();
