# Source Code vs Bytecode vs Binary Code — IQ Notes

A walk from the text you type to the instructions the CPU actually runs.

---

## 1. Breakdown Table

### At a glance

| Question | Source Code | Bytecode | Binary Code |
|---|---|---|---|
| Who reads it? | Humans | Virtual machine | CPU |
| Stored as | Text | Binary | Binary |
| Runs directly? | No | No | **Yes** |
| Speed | — | Medium | **Fastest** |
| Portability | High | High | **Low** |

### Detailed comparison

| Dimension | Source Code | Bytecode | Binary / Machine Code |
|---|---|---|---|
| Also called | Source | IR, p-code, portable code | Native code, executable |
| What it is | High-level text you write | Instructions for a **VM** | Instructions for a **CPU** |
| Produced by | You | Compiler front-end (`javac`, `tsc`) | JIT, or `as` + `ld` |
| Executed by | — (must be translated) | JVM, CLR, CPython, V8 | The CPU (x86-64, ARM64) |
| On-disk form | Text (UTF-8) | Binary container | Binary image |
| Human-readable | Yes | Partly (via disassembler) | No |
| Portability | High | High | Low (CPU + OS bound) |
| Typical speed | — | Medium | Fastest |
| File examples | `.java` `.ts` `.py` `.c` | `.class` `.pyc` `.wasm` | `.exe` `.out` `.so` `.dll` |
| Inspect with | Editor, linter | `javap`, `dis` | `objdump`, `nm`, `gdb` |
| Size | Largest | Moderate | Smallest |

**One-line mental model:** *Source is what you say, bytecode is what the VM understands, binary is what the CPU obeys.*

---

## 2. Example Walkthrough (layer by layer)

We use one tiny Java file so all three layers are visible in a single language.

### Layer 1 — Source Code: `Hello.java`

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, interview!");
    }
}
```

- Plain text, 5 lines, readable by any human.
- Portable: the *same bytes* work on Windows, macOS, and Linux.
- Nothing can execute it yet — a translation step is required.

### Translate: `javac Hello.java` → `Hello.class`

The compiler front-end parses the source and emits **bytecode**.

### Layer 2 — Bytecode: inside `Hello.class`

```text
$ javap -c Hello.class

public class Hello {
  public static void main(java.lang.String[]);
    Code:
       0: getstatic     #7   // Field java/lang/System.out
       3: ldc           #13  // String Hello, interview!
       5: invokevirtual #15  // Method java/io/PrintStream.println
       8: return
}
```

- A **stack-based** instruction set: push the `System.out` field, load the string constant, call `println`, return.
- This `.class` file is *identical* on every OS — that is the portability payoff.
- It is binary on disk, but `javap` shows a human-readable disassembly.

### Layer 3 — Binary / Machine Code

At run time the JVM:

1. **Loads** `Hello.class` via the class loader.
2. **Verifies** the bytecode (safety checks).
3. **Interprets** it at first, then the **JIT** (e.g. HotSpot C2) compiles hot methods into native instructions.

```asm
; illustrative x86-64 the JIT may produce for the println call
mov     rax, [rip + System_out]   ; load System.out
mov     rdi, rax
lea     rsi, [rip + "Hello, interview!"]
call    PrintStream.println
ret
```

- This is CPU-specific: `x86-64` instructions differ from `ARM64`.
- The CPU fetches and executes these directly — no further translation.

### Contrast: C has no bytecode layer

```text
hello.c  ──gcc -S──▶  hello.s        (assembly, still text)
hello.s  ──as────▶    hello.o        (binary object file)
hello.o  ──ld────▶    a.out          (binary executable)
```

Source goes **straight to binary** via compiler → assembler → linker. No VM, no portable middle layer.

---

## 3. Pipeline Diagram

```text
        YOU write it
             │
             ▼
  ┌───────────────────────────┐
  │  SOURCE CODE  (Hello.java) │   text · human-readable · portable
  └─────────────┬─────────────┘
                │  javac  (compiler front-end)
                ▼
  ┌───────────────────────────┐
  │  BYTECODE  (Hello.class)   │   binary container · VM-readable · portable
  └─────────────┬─────────────┘
                │  JVM: load → verify → interpret → JIT
                ▼
  ┌───────────────────────────┐
  │  BINARY / MACHINE CODE     │   CPU instructions (x86-64 / ARM64)
  └─────────────┬─────────────┘
                │
                ▼
            CPU executes
```

**Where each translation happens**

| Step | Input → Output | Tool |
|---|---|---|
| Compile (front-end) | Source → Bytecode | `javac`, `tsc`, CPython |
| Load / verify | Bytecode validated | JVM / CLR |
| JIT / interpret | Bytecode → Machine code | HotSpot, V8 TurboFan |
| Assemble + link *(C/C++ path)* | Source/asm → Binary | `as`, `ld` |

---

## 4. TL;DR

- **Source code** = what you write; text, human-readable, portable, but not directly runnable.
- **Bytecode** = a portable middle layer a **VM** executes; buys "write once, run anywhere."
- **Binary / machine code** = CPU-specific instructions; what the hardware actually runs, and the fastest.
- **C/C++** go source → binary (compiler + assembler + linker). **Java/C#/Python/JS** insert a bytecode step executed by a VM.
- **JIT blurs the line**: bytecode is turned into machine code *at run time*, so you get portability **and** near-native speed.

> **Interview one-liner:** Source is written by humans, bytecode is eaten by a virtual machine, binary is obeyed by the CPU — each layer trades portability for speed.
